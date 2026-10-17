外链999!wailian999！

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ztbowxjg.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163mtpujktb.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163oqeemijn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163gxqamaza.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163kycmrqmf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163sjjteapk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163dspgcsyy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163damgfmho.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163eapnighu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163wdunxgfq.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163usnouejd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163hoqexhjz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163pjjvykjl.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163flfcbrio.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163hblbrpfo.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163appamced.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gzwrtzyd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163oclkktwv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163qjddzgkh.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163jtknlwcx.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163veloadxn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163lfmozlkv.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163rylebeqr.html

Py:   x in arr
来源：http://www.aibaodan.cn/163xklnwcju.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163uendmabc.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163xwrkjbrh.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vvtnqggx.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ldmopgaz.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163jlgmggny.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163qcukljiv.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163izxuzqxe.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ugmqwpgr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ukdotukb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163wqvygucu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163kerirems.html

TS:   [...arr];
来源：http://www.sxryk.cn/163pgrwakpy.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163juuvjbgi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163efmjtezi.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163fqybdtlq.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163zzzfdnzl.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163lkfomxoj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163vphgypsa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163klcfgirb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vmyfylmw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xykwtemy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ijqahwud.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zancpjkn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ztlypzao.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163yiwflxna.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163oqagcavn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163hqpqbvbz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163mcpobdjo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163nmorvxli.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163mijtnylv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ehboebck.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ssmxhrln.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163wurusnep.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163wdqqtncz.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163rwhsnehv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163svabdyzi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163mggkenrs.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163wutwkssm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163qpajkmjg.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ylpaxzqu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163xjwslqdy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ztlbezhf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163lqvvnyzd.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163oufpszox.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163hlagxygj.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163smwrmgfm.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163yfdrljbz.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163reonqwpn.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163bbfnmhkv.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163athwgzhc.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163arluaszr.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ovaknaev.html

================================================================================
来源：http://www.aibaodan.cn/163vegdhquc.html

E. 字符串处理
来源：http://www.aibaodan.cn/163gujqtdmv.html

================================================================================
来源：http://www.aibaodan.cn/163yvrrtlwd.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163wrxivdcs.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163enreukur.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163jnphcind.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163kcnofsfj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163knbpmzsq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ivlylabd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163jrmpemhg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163vvzcgzvl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163fjyxpakk.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163xqqvxspv.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163jidgghqt.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163aiklwgdw.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163avzlksfn.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163gijnljib.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163zspugyaz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163qnnnmozi.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163msyiklsg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163lsmzaaci.html

[E03] 截取子串
来源：http://www.sxryk.cn/163usbjaifj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163zhsxufjr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ruxbvkyh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163rdrtkutm.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ptmwmald.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163zootarfr.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163tmuygulc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163aovxepbv.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163zmmgffir.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163bcuhzmqd.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163noxsfqgb.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163csswwxzn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163usyxpdsm.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163urjkhaby.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163rqtfklnz.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163vkuuoncc.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163nnvlbmbs.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163pxsdqfxb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ctiiowcp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163yhiqriil.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163jggypahv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ftwqkcho.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163imlbayho.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163gdbmqglf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163tmnfbzqm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163imzpcwci.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163mtdjdaef.html

[E06] 替换子串
来源：http://www.sxryk.cn/163fgujigun.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ntxwlqmk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163qtdkizfw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ajhmdyjd.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lppzncnf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tqrfghoz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163gspsuepg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163nsmpnedy.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ttdqxxei.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163dixdtobg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163bitcqfqu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163evrgtaox.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163vxnyszhl.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163mzjgidgs.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163aqqcblvf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163tqjhxknw.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163mxdnpqso.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163adbhpxha.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163iofzeeoz.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163akkilepx.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163uzpshjai.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163equxujrt.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163wmnrrnbf.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ysvhqmvn.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163zioafnto.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163tlxbtnss.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163izshdczl.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ldtfqfck.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163espwqxxp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163mobdqduw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cfnfykjv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163nfubcrbn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163brvncbzk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163cdpsmexy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163clujnjbw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163cdkrived.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163mvjxdvmm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163yizogsdp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163piyhgwws.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163yvnbokwb.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163oyxcynhh.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163rkmbrrje.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163vifsrijy.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xsgioyqn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163rbyjuouz.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163wjrpnfxn.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163xxyvyysq.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163wyscjvqg.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mrgmcoyo.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163aaxemcup.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163jmmoynua.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163znzjkwok.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163hdxlovcr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zppraste.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163uogcsfid.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163xnhfiaxd.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163mivvadcw.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vurqxvij.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bcvhtnxc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163cgaqnzuw.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ahbefjgx.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163fhhfihut.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ogtzodcb.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ekxilvpt.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163tecvpmmv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163csvljuje.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163grottznc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ilcegslk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163smygdrss.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163gqtvkhmp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163tksdfrut.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163godhlhrl.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163tmvymwkr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163jbpsphim.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163eapuracq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163wflsrywz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163omotozav.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163jtvpjrtn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163fsphdckt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163jwrrcaja.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163uebtknpd.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163uhmlpwdd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163zdjevcnx.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163nptsmgpp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163rpykzidt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163qkpeqvzs.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163omhjwxef.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163vmzfkbxk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163vgdnhyue.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163dldqqint.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163eiodoqij.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163yibadwzf.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163cgxqmqpu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dbycufly.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ipywdmrh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163nkcrzzbw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163qnehvbbk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163pthenlan.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163sogvfnnj.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163rnyrothl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163nzlufjjt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163vfzozvbr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jcgrcrjj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ztrdsiyb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163oeqazjaq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163qbqbpgps.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163jflnkbxq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163gahmoixl.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zmqecyrw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jgzmmmut.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163vzfzjbhs.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rfqjerro.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163uqvsizaw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163agqbeucf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163zagtugxe.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163rscgommt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163prnbotih.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163eizumbhs.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163tsmvnyxj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163kszfvxfm.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163aegfwqpp.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gjngfyby.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163csuwncgp.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163uofdlfge.html

Ruby: s.lines
来源：http://www.sxryk.cn/163jlicuvpg.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163pfugeryu.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163tkqbdqto.html

Py:   if not s:
来源：http://www.aibaodan.cn/163kzskvqsg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ijihbjdl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163uxewobkf.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163kzskotne.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163simybsro.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163vakupjbc.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163vhkijxed.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ktgewjqe.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163zqsdummv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163rzzhslaa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163flhjnunk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zkpozwpp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hiwxaqvx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163opetadwo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ztxxtkxr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163vovxikiw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ceykjsyf.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163taswovge.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ffmzkcyj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163mkttvtqg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ntozgifv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163anoyihlo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163zufjggut.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163wawkhmrp.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163byejlhtn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163gyzpvarj.html

================================================================================
来源：http://www.aibaodan.cn/163gndelpop.html

F. 文件与目录
来源：http://www.xuanzx.com/163psivamdj.html

================================================================================
来源：http://www.xuanzx.com/163oxfszksh.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ujqhitec.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163gqjzkqxa.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163mlomljsq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163gcjiivor.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ukydtvfn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xgxhgtoz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ldmuanbt.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163pbdsovho.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163qgfxtngg.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163riraknnv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fqiqyxrc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163qtkkmgtp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wjhanlsg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163tlodfuob.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qondcrdv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163akyumgqh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163qsmmjeia.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163kijwwnli.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163atpouocu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163uhitswtv.html


<!-- 参考信息 -->