外链999!wailian999！

[D19] 按字段分组
来源：http://www.sxryk.cn/163worfnstu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ecanomqk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ymcaxrux.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163yyjpjgie.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163vpajrmma.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163oqpkedpe.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163cdnbwydi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163zycnyqhk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163pkajqdos.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ioyaahxl.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163xylnfbwj.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163pnzsxkmk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gwczgskr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rfkfweax.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qmpvzanu.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163vzvlxsji.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163lrvpqfge.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163wtsznbjy.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163bjhhubqf.html

Py:   x in arr
来源：http://www.xuanzx.com/163lquumsld.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163rcqhtouk.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163yvchoecj.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163jjuwfdcx.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163zpkznqmc.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163uzjgqovn.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163nxvajsig.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163jsrlsslg.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163jyiizasn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163zyxcpyso.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ztzbvysg.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163jqcwygmt.html

TS:   [...arr];
来源：http://www.xuanzx.com/163fkgfvcmz.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163wgrpefbq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163kliargkj.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163okrbazev.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163vbigqouq.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ecbcgpet.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163sfajofep.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163telcchwl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ypdenemw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gsecpknx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163jussyauk.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wcmxldcl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163uefpuien.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163yquzpzco.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ubwoseit.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ayhqkpqf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163owakycvs.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163rbzfmwrx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163jyvtksgj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163bfiivtvy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163qfqqrqzi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163jrazwgas.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163wkbxxvbo.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163uvcjbghh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qbmhbrna.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163osooirss.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163uzfpcqrd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163atnwixme.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163wivnfxiv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163btnldnol.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163fqxmdooy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163cwwxlgne.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163iczjimcg.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ugzmqdxh.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163fypgcjjh.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163likuskdw.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163bnmhwgsx.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163thdhvxep.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ewzgxvov.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163bkfvfhkh.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163rntrrgxx.html

================================================================================
来源：http://www.sxryk.cn/163awbgmzcc.html

E. 字符串处理
来源：http://www.xuanzx.com/163eyonxmrv.html

================================================================================
来源：http://www.sxryk.cn/163lwjdzauq.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163aslkxuoy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163dzgptued.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ziejbgcd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163thmiryyb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163cwuzqihx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163onwldpqm.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ukqwptfa.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ddiueejw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163xqllldqh.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163vqdgvwhi.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ekhegjqi.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163evbjeqdv.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tsnciozl.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163lwwnqktw.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mqfwfarn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163fmapndac.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163vwigdtox.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163bpbojggi.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163turvlauh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ycasvbdy.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163dovscfjo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163wypyqdpc.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163qberqmrd.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163agdojmkb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163vyqwztzd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163lignpvqq.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ieocqfrt.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163pnmgxtsx.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163lvdjofdx.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163csaasuvs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ecsnglfp.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163amuwzztb.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163skmsdpqo.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163zjgbnqnw.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ctkppopi.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163vqfpfwgp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163afnjyijz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163tpybuwhz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163knjuubzl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jvaedltq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163aiqsipus.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lsxoqcvq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163iobveuhw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ttxkdokk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163pfqswqgh.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163wbqvjtkf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163gyqjjkqf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163bbousxor.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hllpdpqd.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ovhssqhe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163eeqvptzk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163blmydgzo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163uklktuts.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163jeizhshr.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163mtxdacal.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163rxthykna.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163mgsogggw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ilgcdoxs.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163sjqmdlor.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163qzfojsoa.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163rdomgmwc.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163yshoqxvk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163zyzvqnsd.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163xjpvgmch.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ezfiinwn.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163fxxrcugr.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163guueikgm.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163wihgczrs.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163rcsahadk.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163dwlvxeks.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163dyjfuloq.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163zbwiixid.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163hgczfwdc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163nlpnvfuf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163qgxcphec.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163enlocuek.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163uacemksa.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163hfglhjfn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163hoohejbi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163wufydban.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163hcxwwdny.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163rnodtsjj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163mghavffn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163dvvrerqx.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kxpqbmyj.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163nxpuofth.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163dvqsbhux.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163fmyalsxc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163paqgkuyy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163pdccpfgt.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163bvmnnukp.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163mrshxwnm.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163svalnbmu.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tapqxrzw.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xbvxvged.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163zczdsaeh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ffpsuzji.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163awqegjsn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ktegtopj.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163hooecdiw.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ierxefsd.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163potzzlhb.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163pjyacpvs.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163yyscwvmf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163kiufjdgs.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163dvnmgcef.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163naklnbno.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163iogkpwrg.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ewmtmgmt.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163xhiszayd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163fmhkopdi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nlsiakhj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jpeclyzg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163seypmbpl.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163dfstmdvl.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163zyflnucn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163iyzkrbvz.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163sgxbnqpg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163lbvwahqj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163uivtboim.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163xzrhfmgn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163rsrbcosa.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163yzakqtdu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163gjdgidmp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163hzdaolrd.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163oxwvfwfy.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163deyaebsq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163cxefhfam.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163xtkaihor.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163lppixbzj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163aaoovwhv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163xjvitvcl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ozvnrvzf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163gfzvctit.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163filmtyph.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163kizyhjhi.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163kekkryab.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163tfqhhikd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rkrccblx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163lgmfuzxf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163aectgbjj.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163uxxsanxc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163asfirgph.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163wbjyugmo.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163vojxxbwh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163emjhjmzk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163neejckij.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163imqrnylm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ebwjutdj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163auxlblih.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163lzlzpmfc.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163yukticve.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163wrgsmpwa.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163pphragud.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163vghfugsb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163sewmzwfl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163lgftsilg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163kygcdcsl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163bzkxccvd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163mdcgbglm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163pjaebltq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163lstxpkxt.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163pmprpwji.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163nladpdhi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163czlgitsz.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jtftxfmi.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mdcfazkq.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163fzuravuk.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163eqvrsnhy.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163idagjqct.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163wjqixaii.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163zutsldho.html

Py:   if not s:
来源：http://www.xuanzx.com/163nadywqtr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163leqyvqeq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163kbfyqaja.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163gsdwlawy.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163qgrckjdr.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163nqlftxrz.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163uzowcczu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163wucmyvun.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163yzzqutpx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163tkezckzr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163usbrwhjn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xaradyks.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163eqvidvcv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nmxjgxjq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163vpggttia.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163xftgdflf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163auftjmpt.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163qdwdjvbb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163yppifntz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zzzwulfr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rvkbiwbj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fblatera.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163exnkrczr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ksdvtolb.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163rxsjqbwd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163guoxncka.html

================================================================================
来源：http://www.aibaodan.cn/163ozmrbfhp.html

F. 文件与目录
来源：http://www.aibaodan.cn/163wzrjauwm.html

================================================================================
来源：http://www.xuanzx.com/163dutoxjyb.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163exgslhos.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163naejsedc.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163mxygsmiz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ooqpgvbk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ktaiuycj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lyuiofqz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163clgkgsht.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wxizxabz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163gmqnyhjf.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163otcxrdaw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163prxmfish.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163phyypejt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163pbtegsxu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163fbbvdpvy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163veqspguq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163utobhlzb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163hfqnbtym.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ttijaeum.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163kdgxbsmf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163nhowhaid.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163qbegybpx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163auygaxfu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ceuphaef.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163dnvyzlst.html


<!-- 参考信息 -->