外链999!wailian999！

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163eqshfsyp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163etimdtiw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163mprxunls.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163mdmejqww.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163bpsohksv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163haauctrq.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ujhotsps.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163clwxixtv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163plleymjm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163othdwhat.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163hsccngul.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163wcxnqbmz.html

[D15] 去重
来源：http://www.sxryk.cn/163xedvtqgo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163cxpwaplj.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163jlhceyqj.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163picbcbqh.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163edqiuciw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163nhuvpred.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163nuenagix.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163dzpbfxwm.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163pzlpsrcl.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163xggdweix.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163kjjilmcc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163jsxvcxnq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163udbmkroa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163fwnyufqk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163jywdtbck.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163drduaaey.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ecwgxbhq.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163vqlygyai.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163cgusztzy.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163tgwmzwek.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ceglkezu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ubbdwvwm.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ezpdjmra.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163uaxofohf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163fpdeknai.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163tojxqysl.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163uelxkeys.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163btjtetff.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163pocvplkn.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163mbepcpsz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163grojmjup.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163pfubqmdl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163nutjygdz.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ohfalqaa.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163bfbqsghl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163qvzslear.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163jaxxdpka.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163brqqjrcz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163luoomesw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ydmlvymz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163yiemlpkv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163jspkmqxw.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163gsegclmo.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163mxjmdyxw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ovdtagjc.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163zmclalut.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163dadenqzi.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163lofxdbmb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ywbjilml.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163sbsxasfk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163gicvhunj.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163aixyztjd.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163qxsfsufj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163mtkrkahm.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163cfeqdiee.html

Py:   x in arr
来源：http://www.xuanzx.com/163hpdfgkgq.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163qgfdjbvf.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163fuidigsb.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163qwxprwrt.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163bscbfpyc.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163vjreuxfp.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163yyhwjcxh.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163pafppqlr.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163pnwdleeo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ifgdgjct.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163aewqyhrt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163oiiphjsg.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163lzdvyunf.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163zzodoqwg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163smjwkkfu.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163zucbmgbc.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163syrywiai.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163xeajbxgc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163lrqfhvdx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ndsyntvp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qzrpryey.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ztobzcwq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163xogcyenw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xcikikdj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163bqvjvaes.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hxmvovwl.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163cgigtoxm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ybxssouo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163hcdzctxb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163kaarczmk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163amliemze.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163igwxjdvf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hjuiqcsa.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ofuikdyx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163bbprqyzu.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163lukwexbc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163donuhhnf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163iyqsynuu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163rlzefoqb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163zghotuok.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163lslwzpqu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ubcokewo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163azuwveum.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163imtuyqzx.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163rujoecsq.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163bjqtuloc.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163bbedelph.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zqcpvblh.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163gzmjewvv.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163qukulbwy.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163sgykxrmn.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ulqgbvwe.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163zravdxvg.html

================================================================================
来源：http://www.sxryk.cn/163yvvnafpj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163oqwrhpib.html

================================================================================
来源：http://www.xuanzx.com/163zvwpjmro.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163btfqbvvi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163atgtcbbj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163pcjttwsp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mqyrnmti.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qejgcyfv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163pgovybfe.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163vymdhjok.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163crkxwfhz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163mzxaoyzw.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163gvokidvi.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163gazkteko.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163cuefjwre.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163jrhhaslw.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cmnnayxb.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163tkjtbyti.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163nqscubiq.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163efmmqhmo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163elfnozuz.html

[E03] 截取子串
来源：http://www.sxryk.cn/163csepfits.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163paizyleo.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163jolasylq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163egthkxir.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163sbarrbrg.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163djrotddl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163pmyfibew.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163wgufwhye.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163vhoxmmzj.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163dpopxyeq.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163bepckjrt.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163rserugqh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ypjfgodh.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163mnvxethv.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163hbwbenxx.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163zzbqtrdy.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ccmkudqw.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163busnrdoc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163klizqbki.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163gflnlpfy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163jrmqysmy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163jwaocckr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163rhiqqlwf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hkbpqruk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163vnibeuio.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163uugnwuzv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163hyisushf.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163xrjpmsyc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ckfanaro.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163xqzjrdxb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wkygwbfa.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163iqisubil.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hgrskfjv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163bpleoxek.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163gxumhjqi.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163fozgqgjr.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163atukhjsw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163dufvgevb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163inhmgsmo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163hkqwvmhr.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ruyrjrmd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163acahoarl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163emicyvsp.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163etgraojx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163yegiaiqp.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163umlvhxsk.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163fpvmnhvz.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163wbnualuz.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163naakrddk.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ibordyul.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163hrnornrg.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163vyyrdnfc.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163wdnlyehn.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163vbfvfmvn.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163qhtbivql.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163lnljxzff.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163pmspbwcu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163qifqqsgd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qtbrurbr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163rbkjheic.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163tefehufw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163nsuedjub.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163mbnjxhle.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163aonmhdpb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163hbtlunbm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163nyhgribt.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163isdmdfbp.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163iwlgbtcu.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ffcqfkkm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163yudaawbg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163tqcrvwkd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163nwvjjsya.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163qykgoegi.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163yfdwbuta.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163mkttdktw.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163aofrvywm.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ccnprivu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163sggyonrc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163fgrimkjc.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ftallwni.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ggclmqfl.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163lrfeqkgj.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ipcismrm.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163nqozelan.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vmxghcpv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163hrsmjyjw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163szvsiprc.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163qllowola.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wsbjosoa.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163aclvgikb.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163yztdhloh.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163nfkvywjx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163jtrcunjv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163edtkmdov.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163bvmttfvu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163fgpcfmrk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ujevvncz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163voubdpth.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163wpaljxbf.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163pvdigdkk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163omnjjwpq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163slijkfhp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163rmqffduu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163qwxegyfg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163mxionbou.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163ebeuevsc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163nifxfmuq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163whviqfvi.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163zmkiutis.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163efxuvegz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163mggbsysi.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163jqrgncwi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163dbhduklh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ycqurvdu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ymhdizyj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163jpplfzch.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163qxlisvhh.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163hmknjhbb.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163wrkykhid.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163zpmbdtuf.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163tyyhhcyd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163siempowk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163sxukwxjs.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163qqfsivpo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163pntgeyjp.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163kpnuzfdg.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163nbbvnkst.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163vrjleypt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163uxiyeotz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mvwcomii.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163whnyxfao.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163uqknpqeu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163oncubuvs.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163rlcwmmqz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163gwrynnem.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163rzpboktv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163zbsibanj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163dbllgpsp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163yaosmgpd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lqteonlc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163uaanwtyk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163hvwwtzwx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163iwiuifsb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163danjtrix.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163akvpiamr.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163iljqqgzd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163bbiupidf.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mwjnmeul.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163twxgvfzq.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ckodiram.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163bwkqbxrv.html

Ruby: s.lines
来源：http://www.xuanzx.com/163nlqotyyx.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163tfeibtbr.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163vhkywqkp.html

Py:   if not s:
来源：http://www.xuanzx.com/163ettmattr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163wkzbrmiv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163wpfombkc.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ipxilkga.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163lhbakemp.html


<!-- 参考信息 -->