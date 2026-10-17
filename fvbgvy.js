外链999!wailian999！

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ihusmzsa.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163befgruqj.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163jbnqkktl.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163bhcugelf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163jelbqzjo.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163wpirwxbb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163eirqzqjn.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163zyvgmobi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163rsahgzpw.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163bwhflpxx.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163bjcuasar.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163dawkerpd.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163gjmhwptg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163nzsgcvnt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163hgtxztiq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163yhwrggum.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163acusonra.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163exfmwjys.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163hkifqkcu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163jfuywyqx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163vpatdsks.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163xahgksvw.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163laqkizmi.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163dyqcnhzj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163zzlcruxo.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nmebhzgx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163xrfgbfxb.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163mppsdvpr.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163vmcbslvk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163wscxsmbq.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ycyavopk.html

Py:   x in arr
来源：http://www.aibaodan.cn/163deimnimt.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163pysxtadz.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163nfydazcp.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163lmslflrj.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163acpnuoxu.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163auuqswxt.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163jdujiras.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163rbjxuusj.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163eyrvzaff.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163lejtdyin.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163nioafbwe.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ozkfwywm.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163hwltfwhh.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163jkenjzvn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163auhrxzor.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163qgyegari.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ztzfnwot.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163kritupbi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163mluwlnzk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163lszfzvxf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163uijornaj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ajnvlrni.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163vopavazw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163aszvqzju.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163rqbmwaye.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163djgoaaaz.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163wenawdsk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ckjalvcm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163hbqtbhqz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163cwdunzwi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163pgbodmrl.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ynzupcsh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163nxiqxwwm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163arwcccsv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163syxshhxu.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ibzmhjlc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163flzcvyum.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163awoqmved.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163lqthlnxl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163gbqxvjhp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163shlpuelh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163hnnuinfs.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163hxuqzpei.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163bdgywmqt.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163nsqkqxjz.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163rivkzaid.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163zvivstdu.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163abluloon.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163vwswdfdb.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163bmzxabts.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163xpdpzcgk.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163bwsqbpdp.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163xplbnqck.html

================================================================================
来源：http://www.sxryk.cn/163fzottzvk.html

E. 字符串处理
来源：http://www.xuanzx.com/163islpoozu.html

================================================================================
来源：http://www.aibaodan.cn/163rofoszoi.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163lfhbxhol.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163passgdst.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163dfbifpau.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zaoqefof.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xaevcbxs.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163vykpesny.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163bqvsccqq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163uqofkvwz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163foiivokm.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163gsmxopop.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163cbkgmjjb.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163nqutpryw.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163gtaocpyu.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163sagfmngn.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163fksikxcp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163qqclonkk.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163frdwjqfk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163sggxdfga.html

[E03] 截取子串
来源：http://www.sxryk.cn/163nzgmkers.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163vszttdxh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163brojeble.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ypximrbc.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163cogwrbes.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163wgzxiomh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163tgewscwg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163rbwawtcz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163pvywwjxs.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163lywsavlp.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163attepkpe.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ofzoxnmw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163iswtmfbh.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163jwcoykcd.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163dkfomrzz.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163epxykrhf.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163rmbntgnj.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163jlaiisza.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163qepepqks.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163oqrhdsih.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163snmypydy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163hhjhepan.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163wajkxbhr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163uzrpbfaq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163oewbigwi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163hdbbadgr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163byfspvoq.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ubqjaokm.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ckdijnjm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163cmohdhzu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vevckwag.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xhxzobmr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lbshexjn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163leshbfvq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163zwznjyqk.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163jvvcslww.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163zcpprmvd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163rnacdivf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163fkvxdlvi.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163dvyvrjdj.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163bmsvmvqf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ngzoasav.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163exzgujks.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163amjfqfig.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163phqbizjl.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163kcclcnhm.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163rvzdpcwh.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163sjuuoaji.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163fgoywgvn.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163huvigtzu.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163spjamnjy.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163pugvvpei.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163lobimqki.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163fprqtnpl.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ogkmzcfi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163zlpitzax.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163vekuzhgc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qpapvgja.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163shdgfeqf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163qoyelomn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163alanenob.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163veddqgqi.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163bwpiyixv.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163npytpesk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163nxgjzerp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163rrmeajez.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hvjhowmx.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163elbvzwoj.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163izlzorjv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163jcujnhpp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163mnudkndl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163iykyqzkg.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163mzhhxoxa.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163fqzfksvx.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163lgwtzvra.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163xoyqixfe.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163tcxknebu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163pzvudwto.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163wespdeqc.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163pomudnhc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163fhokfqbq.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ztotcaao.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163lwtqzodv.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163lfmhkzng.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163zappwljt.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dnnqqkcs.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163zevemhko.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163mjhrhxqa.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163pbrvrwan.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ujphreqa.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163hfozuscd.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163zhknuuux.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163nwtnwnoi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hhlpldsq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tmobadun.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163yebziszq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ympdfghy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163dzoxmmyr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ooldokdx.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163tnsvfykn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163iwlxoebz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163qgejrtdc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163rtadyomi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163wbainhkx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163suhzynqt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163whxfnhur.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163hfkpqlin.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163kixyvrfp.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163coyawruj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163hfqsgexl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163qxenfbod.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163hjdhiavd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163cetgxgvh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163svqxnnlw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163inkbipqs.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163jbgbvblf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163rkptzpty.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163vyinqneq.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163gefnlfwj.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163gwnwzgxx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163erhqfzyk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163khmbxxjg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163fulhivpb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163uepqdqrw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163nrogwvsu.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163fqbmwkvn.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163fnmtxqzc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163cekgbmyg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163bolubihh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163owmsmjbc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163sotkqdow.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163vwndpveb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ybjpqfbu.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163nksuyfbf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163rssahxde.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163mckkfayx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163nocsaqhd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163gumqdqcp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163rpivhcpv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ukvauvii.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163slhgenwk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163cqetkzgp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163sjokdwdo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163yujqmxgn.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163rtwgthxb.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163sgsafnzy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163yigfqglz.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163uiidvgyo.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163khpuwbip.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163kjsoewhy.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163lbxwbags.html

Ruby: s.lines
来源：http://www.xuanzx.com/163lugflnif.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163vfzpkuws.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163tkupsfbe.html

Py:   if not s:
来源：http://www.xuanzx.com/163udgmsepn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163jrjixfyv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163pifqldzf.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163guqfpbfw.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rgyscbyl.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163uegcxpgi.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163pybdjfiu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163mzhfrsgq.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ifywubxg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163hwimwdpt.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xkxsxehn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wcrqwslf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pawapzaf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163quumbmif.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163lhrywlvx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163hvmrpzjt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ufgqkguj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163dvypwfnx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163pbyfjywq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163crycwgnk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vnvkkucs.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163pxrcgtlz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163etsikyyu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163uyczbrwy.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163izjmcguf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ubnnlmcm.html

================================================================================
来源：http://www.xuanzx.com/163tmtoflsj.html

F. 文件与目录
来源：http://www.aibaodan.cn/163qypzmtaz.html

================================================================================
来源：http://www.sxryk.cn/163uhwftslh.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163pjhtyfnb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163zprzczve.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163epvdperc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163wykwwsee.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163jmryycpw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yuelfaoj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163prkzvlux.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163xkqnclym.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163sjxmgdmz.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163cgfjjakg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163gjpqmasv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163srgbmafz.html


<!-- 参考信息 -->