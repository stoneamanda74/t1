外链999!wailian999！

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163udibvocx.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163pexnqkin.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ufvpfwgt.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163atuygyqm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ivjakyzt.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163oprzkulw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163mnsesmgl.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163xpreewhk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163dlmckrlo.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163cpkmpjfb.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163nhuzzeab.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163vgckbirf.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163npqucrfg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163aopzqknl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163gwdvkbom.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163miweuukn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kzylrjju.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163liuozceb.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163rbtzzqfx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163hlaxpjdd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163kgvtzbph.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163vvxzyznq.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ctpbuxzv.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163iafmwfuo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163qsrdkuwe.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163auxkczyc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163oivpfljo.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163bvfaycbz.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163qefuzwzy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163dingvhye.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163lzlgmttu.html

Py:   x in arr
来源：http://www.sxryk.cn/163gpfonotq.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163fxsjiyvs.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163npuxfaug.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163bzxnjihf.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ecpiqbqv.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163tiywxpbc.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ksndtetc.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163jarokezw.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163eecdxylk.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163mtcafshn.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163kxgwfvrs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163cowsyodq.html

TS:   [...arr];
来源：http://www.xuanzx.com/163jokzulyh.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163xibcbuqk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163hboocarp.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163rxwrwuic.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163nnhzvdgi.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163pywnflsf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163nuxftsyj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163fgcxsgxw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xtoegahu.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ndfuauns.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163rzhuqvpc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163hdqltqyk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163rgofyasj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ebxgncbw.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163qfkndoeq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163cbonfina.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ozzbpcwr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163vkubuccg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163tkbhtydr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163jdzumuqc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163khkawyit.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163rrsupuhp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163zdinypoh.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163eonnwnir.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163fwgvlbuc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163mrqlkrzt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163tctqiekn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163etbleyve.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ifcqadvj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163rfqkcpkl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163qgcmpigy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163mjgstbis.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163dnvtnatl.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163srpgfmex.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163kozkfwbv.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163skdhmfop.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163jfkousce.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163zznbptwo.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163nazakmln.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163wsjrdvws.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163bdezvsqa.html

================================================================================
来源：http://www.xuanzx.com/163yhswqftu.html

E. 字符串处理
来源：http://www.sxryk.cn/163kjrmyykx.html

================================================================================
来源：http://www.xuanzx.com/163xwdkgvdp.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163hojvstcy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163icbjtcdo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163mxjzswbt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wjsperqn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pdvqemgq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163laehuxrt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163jfhzdmkg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163jxbywuoo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163sodnrvpk.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163tdlisdty.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163trfxkjle.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163japxylna.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zfvlehvx.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163umcnmfaw.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163eibulidt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163jqkpryfp.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163wtgngrkm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163uyqfguxb.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163nnbdnocf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163somsgrem.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163dfcpbfsm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163bmepkwzn.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ivftxqsa.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163xorzacgy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163niakamyw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ivejmori.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163exciiish.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163uzbbikqj.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163tduhtfpi.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163pvfiirdz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ajrubppi.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163fdyzzwvy.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163xhgbpmdq.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163asrpngdf.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163hrzvhlpo.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ldoevvmv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163cfczetvz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163jxzihcic.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163eehxmtle.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mfnlmavx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163lmdsnmwg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163rwkwpogm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163gvagqaoh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163cxwlcbgv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163mznarxox.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163dpbxxsko.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163vmxpajzw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mzstpezb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dqnpwldc.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mfpxfblx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163eoqfhgax.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163cjfroeyk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163bihpgxkf.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ntipioru.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ukkzruff.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ltyjipyw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163vdtfmrib.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163tpksgkkd.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163jynbhdha.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163dojtkazk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163syfbazoc.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ycxhngfv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163xvcmynal.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163toutdhkz.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163prsragbp.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163wlpepmns.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163yelubfuw.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163kvkzqkcn.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163dtbdzznb.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163bsfaatoa.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163kxusgcba.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ejcthvse.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ygsyviam.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163lkrqvsau.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163wlyggcup.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163noquyaow.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163daaukfwj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163alqgmivb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163lwnodkzd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163farchqmb.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163xpnzdwxv.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163lsgtpehe.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163nxugecuh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ctywbkkd.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jxosdkkv.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163sndoffid.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163awxewibc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163rlsjwqpk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163trmvxwig.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163oisldnir.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163jdbwyddn.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163qteznlza.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163fkowjsmv.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tlmvxwgp.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wlvvcvbz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ddtyugug.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163kborgsjd.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163iwxtopas.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163dsebcght.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163vpfrtulu.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163sfbzdabd.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163lghmaihq.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163uomclmjy.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163odlsirux.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163nvthojdb.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163dzpgkqla.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163odcgrcsx.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163mikmchaj.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163zmkfwwac.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163jtzttdeg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163sypycyui.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163clodplwe.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163mtkeebpp.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163uglfgjxe.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163opfzuzuk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163rvyeclec.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163vrlyoukn.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ihlekgtw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163gzadbdey.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163rpetezzb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163asxecmlw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163xgcebzyv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163sqvhbjex.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ncmqrwic.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163bamcablh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163xdujqrlz.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163phdfarba.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163fvdkmpen.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163inimigmu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163pwmriyvx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163nngnxbjw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mszyvfol.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163tmaphqcd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163guyfmjen.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xzftmuhq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163gqsboupj.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ubmmogqj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163rgdvaokl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jmwjstmq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mbfmgjiq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163brajbujv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163qwppvqdx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163asgfjeiu.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163vqyvqnhw.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163xjencuxu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ffvlmmuu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163yrxqrpef.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163dexhlsid.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lypufvnk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163vqofvhzn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163dbiuhxou.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163xuxikxcv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163rvpjqluf.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163zptzwyvv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163wsltjues.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163rhgxxugj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163buhuqnie.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xgzxsecd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ctxsqyku.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ycngddzp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163kmmfbcxr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163iwusbkhv.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163lznnvrrw.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163tdiwgbxz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ifloeryh.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ujmhgujx.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zpszxvsu.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163udywhsfe.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163mbsumjvq.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163xvuoaeol.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163bozucsmt.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163mtxevlrv.html

Py:   if not s:
来源：http://www.xuanzx.com/163adrssgxt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163upbdnlnq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163hywyoquh.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163pfdxcnah.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ouuhqkab.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163vncxcfqx.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ioabunpn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163rdyawpxz.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163xdwhlwxy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163bwvnuanz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163kxgbsdnb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gedbjgcr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fttgiooc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163coilcogc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163qopullid.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163euzwrvbz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163vggtdwbx.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163volezegw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163fmmoefec.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163amqzqior.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163kufwbtlm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fdfvgjum.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163zqevslll.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163fvoptpby.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163rgaodrgm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163hjdalynz.html

================================================================================
来源：http://www.xuanzx.com/163pfgdlxxm.html

F. 文件与目录
来源：http://www.sxryk.cn/163etsonnox.html

================================================================================
来源：http://www.sxryk.cn/163jhuuaenp.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ozetkhwm.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163wqbodpys.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163cejbtwin.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163fdhwjymx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ivwipuvi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ajmxskoi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163pmjnedoq.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163toqcveim.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163hcqmfxbl.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163kaxxfmno.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163qtunihmc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163wkrelqbs.html


<!-- 参考信息 -->