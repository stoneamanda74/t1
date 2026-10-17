外链999!wailian999！

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163sgdaeasn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163mmqpgtjo.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jlmnrzzt.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163trzacxvh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163vupnwfye.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163aiwjzokq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163efdjeqhw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163homzrdwi.html

[D15] 去重
来源：http://www.aibaodan.cn/163yszcwkix.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163pybeojyz.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163bpmyewmp.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163psoolbky.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163evugdxfu.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163dgjbqgdm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163jmqetlgi.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163jfdgjpgc.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163dwvxnbwf.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163gmegnhaz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163dflkmqrn.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163gdkjnxpx.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ivgfpclg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163zpvryrsa.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163pvxlukno.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163diernffz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163cahxziwu.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163lvthovid.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163uzwyyfpr.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ffqtgbdp.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163uypxhvox.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163rfogrgby.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ofxvpdga.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163mkvooxjh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ilfsoeyb.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163lytefxyp.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163owhsdemi.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163tpfcxzsq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163jgkunzws.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ioetcyxu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163nxzdtsgo.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163csfhijkb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163mwhrbqhe.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163bywjwwde.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163pnureggv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163zuvtrsfn.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163azeeopdu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163lxluogkz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163snoxiyqv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ojkhluoq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163lnjtosvt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163boulawtf.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163wcveayti.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163rcfclvgy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163cfkizxxv.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163tvmcboke.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163yzoympwz.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163aljnubih.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gdtxdxga.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163oersbvlb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163wppcslid.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163knfafkax.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163hgbohjjo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163crcsiswf.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163cmpzjzyn.html

Py:   x in arr
来源：http://www.aibaodan.cn/163nefzpitd.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163xymoomuu.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163qvdgvxqn.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163bioppcrn.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163hfewqfhd.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163kjuzakce.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163rdsvgrcq.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163fsxbvfyf.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163gopziygh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163twketdju.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ubaszbgw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163mgdbvxau.html

TS:   [...arr];
来源：http://www.sxryk.cn/163qcsgdeew.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163wzuoehxx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163vpaksfdc.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163tudwnvgb.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163mlpryxdu.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163rtnfdtna.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163pidkqzfg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163vrkjxssv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163tozwyvsj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163kytjffde.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163dqrmaudu.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vemvrhvh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163zrszkfuv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163kuzilfia.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163rvtwuqll.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163wxpyylbg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163fachbous.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ucmjtmxc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163luvfnrdt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ieaveflx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163obwdvdxm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163umyfkajc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163wivmujgz.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163vtwiqdjh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163pqxwswcg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163btnstcuq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ixpvozoz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163jggfywih.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163myrbzhqk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163xrkixtni.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163jtfttrkg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163wssoxuqk.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163jrlfngfx.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ngqahamh.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163sojqqkzh.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163pnktmopg.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163erskapon.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163csugpuol.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163npstyjxw.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163zlddttdl.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163hpgadnuq.html

================================================================================
来源：http://www.aibaodan.cn/163trrwaqlw.html

E. 字符串处理
来源：http://www.sxryk.cn/163zajuthdu.html

================================================================================
来源：http://www.xuanzx.com/163zagpehez.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163wgrjznij.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163vzhguern.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ubdcawfa.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163rjnvqnpy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zxzsywcz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163bmxfogju.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163niruetyi.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163qjzzqcko.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163nytirrzs.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163jzczcakb.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163gtfcgaqm.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163hiyfpxrh.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163kusdaxwl.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mmgbbmpl.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163pnofdhsz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163rycotngd.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163tskiljfw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163seufrmyi.html

[E03] 截取子串
来源：http://www.sxryk.cn/163kasrpsaw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163zwnalajs.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163eyzrnbcx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163iqoqvnus.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163nofbmosx.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163mtpongvx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ddkzwdxa.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163xkmsnreh.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163pravsikm.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163gnzfbfcn.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163gxgayufj.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163sdlaokoy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163eahiyzci.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163siibbmsq.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163eyhhpobw.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163gvswdqse.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163rldmashb.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163zjutavth.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163cncdtsst.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163xucesqbd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163lvnornsx.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ueicbfjo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163xrnpcbzn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ywhexgrj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ogtnkuil.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163fxgyyztd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163jernjret.html

[E06] 替换子串
来源：http://www.sxryk.cn/163lohhzctq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163twkckwit.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163jgkadidp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ggppumob.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mdjyfutl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yrvzmrht.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163eaxogjkc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163nrnqqtig.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163epvpxhcp.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163dswhenpg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163jtfhkrgf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163tntbsbap.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163jvrtygyb.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163oldofgkv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163mkqztfii.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163kgpbobes.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163bdzmbfkg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163vukhooun.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163zgbuqxud.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163bvbjdbka.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163hofbctde.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163enkcsfas.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163lktboein.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qydkthjo.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163vuivamha.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163jtrqozgn.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163qzjmmopl.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ffqrulli.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163faekhohc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163nxtlviwj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163noqqegvh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163dfolxgra.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163wxdwagfq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163wwtofdkt.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163kfiwqtla.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163qlobnvsz.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163rbibfddv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163yusweldv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163tqycehhw.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163kurjeisu.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163boxrggld.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163owakhjgp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163itrutxjb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163yydhjxhn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163bcghftvr.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163tipykrsv.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163wqakjrjz.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163dttcyhxe.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jkofghss.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163myvqzsbh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163evyoxvit.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163cjagctjz.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163dxslalgx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163bheqvpei.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163bwtufgmp.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163wykefgll.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163vezvokkg.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tmodznrg.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hxvwvvdp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163bfpvzlhw.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163gsoivgfd.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163hfffyiat.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163agbctypy.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163tdfvjjba.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163rrhznynh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163aumdszjl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fobewopo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163zmkdhwhi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163zlajlhag.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163aqvpctnx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163grzpkvgr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163drbbxkvc.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163lqperqev.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qckhkjnm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163xecikbqi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163rqtbrfru.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163fnjzpuww.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163myfpgudg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163bhfgkxwy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163qbrtjhdh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qpwoytoo.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163zmhmqhmp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163jxpumgcg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163jeqafjlv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163kvgsbesk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163bsboojcp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163qrufrrro.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163kooxlhcs.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163twhxhgjy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163smkepvid.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163aryocqnt.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163zcwwmvbt.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163snnxcoik.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ehvbogws.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xsehjmdv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163tyxaoptj.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163aaggxtis.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ahdpyzcg.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163mbnnwzmy.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163pwnhggyg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163kcqyzmrs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163uermeeou.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163obefwpjc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ozoolkxl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163kwnwxfaw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163dcjtsokm.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163erjvfstl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163kctgvmse.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163tprwlktj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ssmdqqkg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163sftoqirj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nbiryutk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163nqqhmgef.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163xpdtlprk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163grigvsql.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163hcpezzap.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ldzriyso.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163klqdorgq.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163qphmdgox.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163prmimiia.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163cksxfgtj.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ghjgdjnj.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163bsdbufwm.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163fzzmwmgp.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163nuwvoyem.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163remjspxw.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ufvsimxp.html

Py:   if not s:
来源：http://www.xuanzx.com/163khufhdrq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163mrtwvisb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163tibfyxrh.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ycfnwbdi.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163gfldbiqp.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163zwvfckhp.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163jiqtemnf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163fwppkgob.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ihchrixk.html


<!-- 参考信息 -->