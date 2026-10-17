外链999!wailian999！

PHP:  sort($arr);
来源：http://www.sxryk.cn/163odrxuyta.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163foiurimz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163dnfolhfw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ieagzzky.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163lvpahpwm.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nvmosqvb.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163busratdn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163cwxixivv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163qfakrfdi.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163nutyhipw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163irwumwvo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tbidkzrr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ujvxadeu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163veykejoo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163bhumebtz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163tzulkpse.html

[D11] 反转数组
来源：http://www.sxryk.cn/163hntayduc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163iuvlsyly.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163rdzvaeui.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163dqgxuuvs.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163rcfxirob.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163tcxgqvzq.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163nwrrqdgb.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163dppjpgas.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163xfayjuha.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163gsiftszl.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163xypvscno.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163eozpsalz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163uiiqqqgw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163clhotslb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163idrgwkki.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163hgbmrdjq.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163woxvaoxw.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163milkjcev.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163rjldycje.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163drffefoq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163smzpdsvz.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hloewfod.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vitgsycs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163knydzdrq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ixasfwgv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163mcsqqenf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163rqqzesra.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163xmexdttf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163dropqseo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163jhoqrdvt.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xeyjtptf.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163yumgrndw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ighbxtfc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xgmyvsfe.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163qlvgbmes.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163bjjaxtfd.html

[D15] 去重
来源：http://www.aibaodan.cn/163swglycad.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163cmavtywa.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163povkogtr.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xthydtna.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163slifpdvo.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163lmktyygl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163fbzmgdci.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163mlqpvigx.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163wntmlcbm.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163biaxuevz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163rnbjlltz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qqhrolju.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vntzkypo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zjbfqlin.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163kmtxvfuu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163kxmejpmm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163troubjcf.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163qsbhumnp.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163cpuvckon.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163mnpfqisf.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163dixvvaff.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163wgrqnaux.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ltithelb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163xutykfcq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163yyurutie.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163yhrvbhss.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163eninqplh.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163lczmnifa.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ardnuoyd.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163hlwnlikk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163lbqoyolm.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163exuzvzus.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163szoppelp.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163qfqzjkjm.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163zfydfytq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163uudllclr.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163cacgqjol.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ztvplueu.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ynkzdhgm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163tdkkqzfs.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163orgtzrak.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ktsktqwl.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163uthgjozl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163mabylfwo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163llqntape.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163hbvnjfcn.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163wriczudh.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163zefrbnbo.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vyhxbsuz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gphjqszx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163uvhctvgg.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163adbhsefy.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163sbjmlgdg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163suziomzi.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163viegvaqt.html

Py:   x in arr
来源：http://www.sxryk.cn/163cdvmapvx.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163jhntxwut.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163kxqrfqhy.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163mqpdqqni.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163esofojnp.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163bwwiqhql.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163vsnnimce.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163sptijlxs.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163cqoysbka.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163mzyjjmcj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ibstvyew.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163spaszvie.html

TS:   [...arr];
来源：http://www.sxryk.cn/163tdzhmxla.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163xoairsmz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163uxdvpntn.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163bbkfsoou.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163owhhaxkm.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163uftequmn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163avszonvd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163mwlwnvgt.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163sfmmtnqs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mwgnptam.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163wbergomn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163hrpseagc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163jptyrety.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163qrgbhlva.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163whwbikfx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163rqanxsfq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163kapzusnw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163vbfqsbul.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163rwbmjalj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163trvrvbsw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xwmrdqkx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163yanpvytf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ntucwyaz.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163lrabienc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163uenfenyf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163nbzztzty.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163vbnvazaw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163sirnfcuf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vkabsbok.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163fangkjcy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163zjjrqkfl.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163kfwrudgv.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163zrhvagna.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163fzwfexzl.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ktztjzdm.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163cdqacqqq.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hqfgvyos.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163kuzyvarx.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163anaohlwc.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163uabzuamv.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163aovraiuo.html

================================================================================
来源：http://www.aibaodan.cn/163reipwaqg.html

E. 字符串处理
来源：http://www.sxryk.cn/163gwnhdasf.html

================================================================================
来源：http://www.xuanzx.com/163qdmjfopd.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163mlxuyzcm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163uxvyrptk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163fwrrrqbv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ppfdanjx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xowzljyd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jeuphlkr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163aaewwxxu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163bgbmtent.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ytzkitig.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163cjynnaow.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ibladlyq.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163pseuqkfi.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zwndpifl.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mealoxpv.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163jzaqssth.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163xonbluaj.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163tihlzhyg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163hczkpbge.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ecuhiqkd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163qxduckei.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163xgceuhpp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163zwskfwue.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163zoyyumok.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163wjmjlned.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ivkubuoh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163qumblchj.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163utkebuwh.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163wekgkojj.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163kosyehjy.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163xztalseb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163qpfzagwh.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163vlgryjqf.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163mhqybtpf.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ruusulti.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163qpvrxcox.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163oeoihlid.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163xybdwdkz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163vyumscxf.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163eupcomtk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fvmxehkl.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163xdrcmsal.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163mmpfawdf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163nkwvhujn.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163zfhptadm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ljznmmbg.html

[E06] 替换子串
来源：http://www.sxryk.cn/163dpicjubt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163tnhdtktr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163jrwiztfw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163uxttkiaj.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163eoftonqy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tvlfdrde.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ddzeioho.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163biutptom.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163mhfboyvk.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163nawtoarw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163tqzzhkjx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163gaxhmysu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163pmbrunfg.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ybqbedru.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163zvuebbdz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163edtexxym.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163pukpiycj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163wkxhfphy.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ekznqdqd.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163hapdixkf.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163thrvtqvk.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163whovreqx.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163valfagne.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163shxxonfg.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wqlthpeg.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163dbvnteey.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163jeleccbl.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163egyqxlgk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163bxofjiuz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ipoigudq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ybakuybl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bbegtmxc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163vszihvpv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163jtyrxqdz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163sbpfewsv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163fifhmjua.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163welkgelt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163goobuiur.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163sjlozela.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kevawnbb.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163tzvupezx.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163gvfufpac.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163gbarrops.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ehnnuwrd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163fknsozap.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ctxdvoeh.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163pwthpsek.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163fsniqqgn.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ugoupxyy.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yxbqoqhi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163jjmieuju.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ucefowoo.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163dzfqtdsg.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nbtiflbe.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163qkhuzrfp.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ddbuczsh.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163iujlkdzk.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163cxykwbdk.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qdawxqil.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163noooqdzm.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163vcrhjwmb.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163lgupbilw.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163udzzmxrk.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163jtqfqdde.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163cyyabehb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163jorpbwwz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163sveblerq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163pxkcdwae.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163emunvvev.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163jduphudy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163hcthdspz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163jmghajyp.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163orwowzrg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163lspvbzsb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163lpbnavkv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163vrvyaxum.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163qrublkoe.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163zjnpamnh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163dlxodpks.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ifituxje.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163rnbtxott.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163fufezcqs.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163uzicidev.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163wfnfzcia.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163pltpenks.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163avkjfznj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163twgaaixm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163fykyirlq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163leeyrdrh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wclblrmf.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163uxhgncae.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163lywrdyzv.html


<!-- 参考信息 -->