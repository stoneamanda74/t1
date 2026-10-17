外链999!wailian999！

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rvvdbtai.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zqakcnek.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163nmzenxqr.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ybjcdihm.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ucpnjyfc.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163vwjxmmyk.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163njvlwxsb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163pzlpamkm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163adrtolvr.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ebgfbxbs.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163fgslixya.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163rqjgigmz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163uuouxzlu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163eprsmbqb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163chxkqxij.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163uzqztewg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163azsiawsy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163skwaeivv.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163phujibub.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kxaierbo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163nxflrrar.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163pustjvat.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163wucvmtuc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163pvabvblv.html

[D15] 去重
来源：http://www.xuanzx.com/163kimlwkjh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163pffclzvk.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163vxpkhmmf.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163aziupqsd.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hcbskqit.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163unmgxnoa.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163uawbhgoe.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163vhlwebaa.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163guwdgxzx.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163qdogcrez.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163zdseblqb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163nnrpzdij.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163uegqlodm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163pnfiutod.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163hgmdacxm.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163qxsuxqak.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163lrqqexll.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163okselzei.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163pneuekkl.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163xaasvvsf.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163rztbswdg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163qbyqdfhl.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163pqqdumxj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ztrkfppj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163hlydxdtu.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163dirrlinr.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163wmbeszbt.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163scqbvjml.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163lvdoutdu.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163fkfcuznf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163vdramlkz.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163excvjenq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163wrzkcrxj.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163nldlojri.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163iiomldpw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163lieptpym.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163kmcgskbz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163smpzauge.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163lwyloygd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163aaqsvzfa.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163swmnfsby.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163wrpzukfz.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ntkwvgdm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ossnkapw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163gtoojmeh.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ugnvshdf.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163bcaixbfw.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ertljwfn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163waqvpdnb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163agiinpzn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163popdsqhl.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163kathzdvu.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163brvjrbdv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163lhhgxscg.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163egumszkl.html

Py:   x in arr
来源：http://www.sxryk.cn/163bafnmphi.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163lcfdbecz.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163pvnommlv.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163lxdwmnbf.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ddpzzewf.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163edhmslbb.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163pionolnc.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163dudpdrtd.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ccivgeul.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163pymmlxeo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163bfknyzfn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163yrpgzhtb.html

TS:   [...arr];
来源：http://www.xuanzx.com/163uxqrmkkm.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163viazzkbz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163juyicgjs.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163qqniqofa.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163wewhawdk.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xksqssyz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163yizgcucw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163bqgwinvu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kyqnzdwk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zsqlzjrl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163cbzyvulf.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163arglvfcu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163arjahzvg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163dvhtxrpd.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163saxqtczl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163gheqkrue.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163spgxpklp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163nbkniycr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ajoybryn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163qczlnpgu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163gufuuymg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163iopwskzw.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163zvhiyaej.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163bxahfcog.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163hnhevodq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ucosywwa.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163iofmkshq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163qftdzukz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ccdmsiof.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163qzpcgjmf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163twyqzxpx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163zujsufms.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163vlpkhdfs.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163vnpvbcum.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163trerogms.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163gwcwddhf.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163hasxucvt.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163odicnwmn.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163srskfhrv.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163njwwzdvn.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163alktdyje.html

================================================================================
来源：http://www.sxryk.cn/163abtrhphe.html

E. 字符串处理
来源：http://www.aibaodan.cn/163xgkbtvft.html

================================================================================
来源：http://www.aibaodan.cn/163nnepipdc.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163ippwekbm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163mayffwli.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163xsoligzm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163llvyjmpd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zzmladkp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163kfzykfid.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163qrzdcybm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kxlkhmmc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163doxhtkdo.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163vbezsgvw.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163dylaaeib.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163oxgsioeu.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163yxmuidej.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bcqipbqd.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163qurzfyix.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163yxhivpkb.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163wyktpzia.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ruanlkug.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ryvicyco.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163afpwbjvr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163hhxezdsl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163nvjardgo.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163edvaakdy.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163qaloxcqd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163yfrydtaq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163xgqnpmyd.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163afmsldpn.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ikcosplb.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163warpzryf.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163jnkmbofv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ulneokkd.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163nnwffiai.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163izbboxjd.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163yegzbxes.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ptmobbao.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163lsljxpur.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163gwifjiqy.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163bsploryi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163netrqabe.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163pixsbdyl.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163pnhnoqvg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163myvhairq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163txsfuznf.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163daxuldad.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163xaeryfyz.html

[E06] 替换子串
来源：http://www.sxryk.cn/163vpcblqqv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163kucgkaca.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ktgrknxb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gcknhhgo.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163htsuzwvb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dgbcxkdp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163nyvbrtej.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163irlyqbzx.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163scnfyypw.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163xfgkhtrn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ujmodoek.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163cnsnmnfd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163eypuaqry.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163uoonekbh.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163cixvskfx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163axypihqo.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163rjeuaafw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163yvktuiin.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163hhtwxzoy.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xptxayuj.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163xredztia.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163nahsezjc.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163fqfwemjg.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163dmtmegyy.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163hkymjvhf.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163tfeazroa.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163xsojtell.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163eybaoufw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163hrkgwkao.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163nerqbzpo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fvgpntmv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163oyvmdqiv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163iksfwnma.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ndfswmwt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163nfgstkgp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163cnysyhuc.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ihqepzat.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163nbgsyajv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163syujbllt.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ssovlmmw.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163whzpyeqr.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163adeakaau.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163cvoadgvw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163uwbdhhqa.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163kjggltra.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163zmoqvrvp.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163zcttmmrz.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163gytrzida.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ncmsoeiw.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wquclkkp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163lkcrosuo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ormkmbtx.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163eazkoahy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qkscjgjy.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163qaeucnau.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163aandldkc.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163srnbhrcf.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163yzotoiqb.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163yfqavgtl.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163uncnchqr.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163azvsuohn.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163xvfczzwl.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163kiilixop.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163fgknbwgn.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163bgadclvn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163gbkxcomc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163btsadozr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ntkavidq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163ekggmxdj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163imkapqmt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163xnitjxny.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163dewmwchu.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163skhmkcyd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163zurbtvrt.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163opmgsice.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ftniudrg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163xgprjcbz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163fdhciqvv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163rcctjpkj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163bvzlaxgj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163feyxzyhk.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163swcyknux.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163lookqpjm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163lbywjvvw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163iiloqjde.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163azqbrzsy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163osrvonnl.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163uwrpsotz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163wownrizy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163rviebedo.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163hgthexhd.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163aqgbamdv.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163krcmkhte.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jpommnwv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163sjxvqvlz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163lcytahxo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163holrqzke.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163svlikfeb.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163dqiukcdg.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163takghoiy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163yvghjtku.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163febuazpq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163enllbbnq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pcqzblod.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163dfmkemnh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163moshvcxd.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163xvpbxwwv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163dstqskky.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163mojgcfdm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163wrjukgmf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163lnrormht.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zhqoolfo.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163shuonjnh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ohlllbkj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163osmwoajo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163hcasucfa.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163axvlcnxx.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163wxhypses.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163lbqghcoi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163udijzeyx.html


<!-- 参考信息 -->