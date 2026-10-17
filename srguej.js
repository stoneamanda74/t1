外链999!wailian999！

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163lciwlwum.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163gwpbqwwu.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163noiiocbv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163rzoubgeb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163bdgxpahq.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163svwjyeut.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163hxakzlaf.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163dcoacxiy.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163iicnqvdj.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163huuasbqi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163sbbdxdqb.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163vnfaiqqc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163xntelnfx.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163uywaaqya.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163corrvqfi.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163vtnmndac.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163fhlrtakw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163nbugjcon.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163uyvteacs.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163mgfobwtx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dvbzacea.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163uluehfye.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163cadmhncc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163qsvqdczb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163mndkqznj.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163rtttpvee.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163gbvpqgen.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ysmnqgex.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163uptkydoj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vtgmaigb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ckdwvqvn.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163hxiqiwvq.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163bqianmiw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163cbupjngq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163sagoclgx.html

Py:   x in arr
来源：http://www.xuanzx.com/163nxzjtmyv.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163bkzutlub.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ybstnsbc.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163tmwuqbgo.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rytaeukw.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163nbkyskby.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163lhszuobi.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163nvtsuxtz.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163xuzufozu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163kptmltpm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163lvwnwtsr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163afccyxzs.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163kysnspzq.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163lfjnbnqo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163sgbufajr.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ikchhvyo.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163vdgcjpqp.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163rtryckzf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163tjpbkyiw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163cyqnxbvu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vjgotytd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ghbpxvos.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163hoxedtzo.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ahlqnhfk.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163cpanihqq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163fmekxktm.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163loofmzik.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ohxzjgbp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ywuqdkkg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163zztwggrq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ckwxvjnq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163xzgcgvvz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163rafamrad.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163xjrkepqs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163nbwxvxqa.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163bmnivnex.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ioarhgjz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ktgtrfpt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163xqtgjaiu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163kewpwegn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163qibbcxac.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163nbwerwnr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163hqzuzrbo.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163aiosaoht.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163mxlmeozx.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163dvguqpmw.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163erdcpuom.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163abuholfn.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163kwtnkica.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163pqyvovur.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ogziilwe.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163tahyyibi.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163olpxacnl.html

================================================================================
来源：http://www.sxryk.cn/163knfxibfp.html

E. 字符串处理
来源：http://www.aibaodan.cn/163fwmvpouz.html

================================================================================
来源：http://www.xuanzx.com/163onzvntlb.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163abkffumw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163epsofyrv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163cicjtuae.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163cbjgbttq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163yjbswbzx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163mfkdzhyi.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163bbvzpper.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163svecdtrj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163twtintpi.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ogghhheh.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zrrfdsaz.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163puuhgllx.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mihbqvnc.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163aoyuxpft.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163brroesph.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163jbzvcpxq.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163nhjltazw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163nicwjvwz.html

[E03] 截取子串
来源：http://www.xuanzx.com/163tprbaahu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163klpqjlbx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163dauugdxo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163pyzcjewl.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163fqpzftxd.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163shjcmdrb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ivlalddu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ndhglrcg.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163nhauczez.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163pefwvzqg.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163dkoyzbpz.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163lstwmiuk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163emegfzql.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163ybzvzvmm.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163vrizchxq.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163fezproso.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ktwytpej.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163bnuwiftj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163seqfksiu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163bgtknfmk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163sqccpyht.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163blssltis.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163kdliqlyn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ljxxjsrz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ksizqqon.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163abclegvp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163lagoyzpp.html

[E06] 替换子串
来源：http://www.xuanzx.com/163jxvazqnw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163upkcswnt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163llhnuwlj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mnsywwxl.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mnqawhcz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163objxovox.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163nnfxqiha.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ojjedhbu.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163jaqxytgy.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163quircggs.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163glhftmey.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163atrmgerl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163zfsbowze.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163cqhvfqrm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163intmxoki.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163aciwjvee.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163mrdshmlw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163olermycv.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163kghaomtu.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163buqqkhec.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163wjsnoiqf.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163uocktrkv.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163orvrxcsp.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ahjoccdx.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163kcihoarc.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163llmsomul.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163gojyxyor.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163iajtjqkq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163bvrmrhzv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163enoyjymj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xenyhgja.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163efceeved.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163trxwjhmp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163equjchmh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163nhzpqzvm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163reixaysi.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163eiwolbzf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163eguxsycu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163bmrlnxiu.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bbeqnrlz.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163juadfjqf.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163tcbfzaxl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ujnsshaw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163mrzvrovs.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163qsobfels.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ryxztzop.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163towxxayd.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163puoylixz.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rskecoqz.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163naqhwpoq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163smglrnro.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163rucvmazq.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163wcraortn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qipyorwu.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163hojilicf.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163cuvgdbjm.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163swvyawsv.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163muqsekup.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jefojdvc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163rnpyaimp.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163bfyrbnoj.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163esougxqz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163bhvikyjk.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163fmwxncrm.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163fufsnvpm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163isykpizm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ksqfvaxr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163maowqsvb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163gpalarcv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163iymcihmq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163rlwqslxz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163hwapahjg.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163qvxdpggt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163mwxvgruu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163iflxuurp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163gxysfcge.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163fpshhyjz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163fzhulqwo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163eocdexgl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163bzlprnmf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163uxksvcps.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163dgmvqvnj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163hfwaquau.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163umntndea.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163rylsazol.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163tzknlpwm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163cghzqazj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163hrbuaoba.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163cfbradsx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163psidkjyh.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163kpmwnntg.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163doecgwvt.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ajbtxnsc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163tuavpngq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ceoesyda.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163gugkdyoz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163yqxvdafk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163vslpbxsv.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163gsvrhwta.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ehixwzca.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ownrnmtv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ztwkbrvs.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wdudadub.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rbqhkfgt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163uprjzqxo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163mwmgugns.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163qwymyzym.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ifsmtdih.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163xpbgbfhn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163nzlbrtit.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163quhbpior.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fqqflqeg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163brtsavzg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163anelivea.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163hhhxdegg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163qfxmhshq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163kygfctfs.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163cpnidhga.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163hgivjufq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163jlltbsrx.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ffrganuw.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gwuazbui.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163lomxofza.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163mkujcijd.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163lfbjdhhf.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ypddjwek.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163sbywrgxf.html

Py:   if not s:
来源：http://www.aibaodan.cn/163xntzyxzb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163qefeezxl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163vgghqbpg.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163yhfbemvf.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wneppiio.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163fixdnukz.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163lhhjyckh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ducedalg.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163umnetdnk.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ueqdslly.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163fjmcpyzp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pxfchaic.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nrjzhiby.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ncxcbevy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163izyofrfh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163vnpngeaa.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ecupmptg.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163rqfmgyth.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vzjqhfkq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163oipeqiqm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163pxclhzbq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vpwzbugu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163otkptzfk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163wdqymrec.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163jxwhuyoh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163rwtlimsu.html

================================================================================
来源：http://www.sxryk.cn/163fjhgyema.html

F. 文件与目录
来源：http://www.sxryk.cn/163gcqfdpze.html

================================================================================
来源：http://www.aibaodan.cn/163tiaokpom.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163fzgnbwhb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163zrqseglq.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163gkmgygjo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163khginrci.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163yjmfobcj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163errdjmag.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163djqhkjaf.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163lybdslsc.html


<!-- 参考信息 -->