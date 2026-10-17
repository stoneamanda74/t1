外链999!wailian999！

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hmlyqrzs.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163dlmperkr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163anicjzyu.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163tifrdgti.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163uudeubtk.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163zcguxfip.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163srvleobr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163fmhklolt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163afgpfqcp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jptvtaau.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163xtvixcha.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163qypsxvgq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ifpwzrkv.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163hxulwmkn.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163coajjnih.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ygbfjjqr.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163jylqagvv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163oezumhbq.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163juznnhiu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163vspmkmuu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163xfapxuta.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163frztrrvn.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163rnstwxly.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163xsesoumj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ngrkusqy.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ulkxmgnn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163yxtxxblb.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163acmcpzaj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163uqjpdhtf.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163rxitjazu.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ynrmezwd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163hpzdxnyt.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163cxekazii.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163ugqzhpab.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ligxbszv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163osiehzvk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163pokbmpdv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163oknqhitx.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ovfmeood.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163iyvrbwmv.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163hdoruapu.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163htxidnvg.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163mlmaampd.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163pdkqupou.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hexyjnjn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163qmgzwias.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rzaaguif.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163tncmxvoe.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163mrfuitab.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163nqbuqsqs.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163zbyqqqnr.html

Py:   x in arr
来源：http://www.aibaodan.cn/163jauezzwm.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163hpukvtjj.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163fmxaoexb.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163fptyxufn.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163jhltoaiw.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163uisvisxi.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163awujabcy.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163qacemozn.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163cxhrxaze.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163qlnfvwaw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163hbifryfy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163siweivzn.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ejstduuv.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163hawwpglb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163asfugzyb.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163gkuteysl.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ykoyckus.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163kqunxeuq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163uszonaup.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ejeccrnv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163cupvzvah.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163swgvpnau.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163zrsciyem.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163silzupfy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163kshciojf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ubjvaatz.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163jjsnqxdq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163gcuffqkv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163vihphnti.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163wplftstv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163hhdqrgdv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163joqzhilw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163vjsfvmep.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163lrechqqi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163vlieejab.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163vdnlnqed.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163btibeqnu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163jpqwbqgb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163gdaagcpa.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163zplyjreu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163vbgmgnel.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ojtvrkgv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163vcgbsuwl.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163vacpveif.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163oxmmnqnf.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163pglhauiw.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163zgblhekb.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163fpyvcbzo.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163nboismba.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163avgcctov.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163snpenrww.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163wcszczkw.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163aidkqmxv.html

================================================================================
来源：http://www.xuanzx.com/163iifyyqtm.html

E. 字符串处理
来源：http://www.sxryk.cn/163lxhifnwn.html

================================================================================
来源：http://www.xuanzx.com/163sokjgdcf.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163utbitxvh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163oxyjvhby.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163xhvkgrxz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163nxncnuvk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163paxxglgu.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163zjjhrijq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163dafkweov.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163lzuibknw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163udzycoyc.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163lctjtowl.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163jdiglxqi.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163cjjnbrcr.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163yufhylrb.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163xwrfiqos.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163tuslnrxf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163wqwritrr.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163tlurhgop.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163hfyfxqnq.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163pntvdppx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ipazxpxq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163woqiajue.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ebsdvxzr.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163jpjcntia.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163oytyllzn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163qlhvoqye.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163umjorbxa.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163tgjawwek.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163vewzqkkn.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ddddougq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163dljlwbqg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163afbvtspf.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163kbysvfcu.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163elzuntgl.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163yuaxpfin.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163hkhqelsi.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ykbbrcld.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163gjdocjlb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ffkhwjom.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163hyrmwjkw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pmzslqut.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ptoashga.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tiqyopjb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163msjefnvh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163kbdaahtf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163syacsbrs.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ftengirl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163kxnrvewc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163tzctyljk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cmtdkjtx.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kmtgdntv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fypuzqkm.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163eaphreqi.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ujklpked.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163nxvykbxq.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163dzjtjjuw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163daskagvl.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163niqdxifl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163fowbgija.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163geousutr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163mohrvwyi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163dxmxsqbq.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163mrkdsyyy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163wihilvup.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163lpdgitvz.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163quljydez.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163xkgrfgbq.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163faxtosnz.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163iqrfoylz.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163fjqlouoj.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163rzjtbgpd.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163rzdgvkzz.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163jrjuyiwj.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163dtligdgr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163wqpcnore.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163qqxvkhiw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163lotxujlq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wsfclccv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163anseztxf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163bololqez.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163nvvommak.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163zcztwhup.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163fvgysfwy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163eaipthhn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ztrhjzvd.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ajbpqkno.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jebooxpl.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163xtivdqte.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163bnreuukb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163lammwzjn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163pquijnrl.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163pdnllipw.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163cttnezrk.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163hjevsdre.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ayycyabz.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ineckyar.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163zcvjpxyn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163fcmewfnu.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163zepyrtpb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dkrjzpkv.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163wyzbrjon.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163rhjhhero.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163rvohhcfb.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wrarkbrr.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163lywofobq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163wgqxcrwq.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ywrurewb.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163fywlauhh.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qzptgwfp.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163nuiafyad.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163qqjevwyt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163fsfqwtkt.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jeskosxu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163yxglgndd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163tbeiwvpe.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163qdqluwep.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163sxnifozq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163rqnmniuh.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163ehypsalf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163vhvvcguw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163fkzdxtks.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163fypfvanr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163qzkbkqwr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163fdphjany.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163mlrqksdz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163dyvkdopo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163lhgmhnub.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163yfgoyvnl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163wysarwyu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163stylkbvr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163vyzocpga.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163kdpojcta.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163fdptmawh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163qmdgmiqz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163mlvbzvhg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163fsnccvas.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163zfhcgfme.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163dxatzgyp.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ekkudtgk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fmngedbm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163nzlxoorf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ddyfuufn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163jpsvyeav.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163rdqqjckl.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163kwqzjmre.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163lgfliihz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163wepkfptx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163cyusysvl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163cfjcjfne.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163xqjhqtjm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163luglafjt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163vwuukaty.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163xnbudjpx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163xfhalkbp.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163zlcrhjbe.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163sdqovtbe.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163cstloavn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163kgojnlih.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163jrlwxwqb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163dlrfwvjp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163fzxivetk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163geyisjak.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163hijwzntm.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163sevbnemx.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163rymklcvs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163rmketkps.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gylxggvc.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ictrhawx.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163jszgmteh.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163lgwjtamp.html

Ruby: s.lines
来源：http://www.sxryk.cn/163wpfznhfa.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ocgyetdz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ghltvygv.html

Py:   if not s:
来源：http://www.aibaodan.cn/163bifrwcld.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163atkwjqdh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163dgwvtujf.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163goxblebm.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163kjpnkgga.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163yxvebwqj.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163hqochvlf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163rpdjhdak.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163yzcydqup.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163zefbbodw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163xmnkyqrm.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hofayewf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zhqciubq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163odyvzrfa.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163xfqmennx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163hguwptpe.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ogkppiia.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163dpopjqli.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163twsxwvlc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ajslpglj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163eblxxloj.html


<!-- 参考信息 -->