外链999!wailian999！

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163yhnmlewh.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ejoecajh.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ayqxmvzh.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163foycjwex.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163owkygfyf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163dogzzlqi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163raqctumq.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163bcviuimc.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163tuavlqkp.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163osvykgmc.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163stiuvped.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163yjrfkrfd.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163nygxzikm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163jfwozbcu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163aivgshqi.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163iyuqfazb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163lpwvybrz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163fiwagqsp.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163xclvqmxw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163wtkgmfda.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163vvembkht.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163gzhxolph.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163fgbciazh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163exkgcxxw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163sdtvujcd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163wvllpico.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163kwbywknd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ibakmjfs.html

[D11] 反转数组
来源：http://www.sxryk.cn/163iuuwmfpw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163fbqqlpav.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163zvinfjqb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163enkeyxof.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163mhxmgbvp.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163qsiertxs.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163vdvasghf.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163mbqdnqjy.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163fqtqbxqt.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163wyrlevpz.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163eqykeomc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163hgjihtfa.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163szuhpftr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kkixlvfw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163aozzgigd.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ayztizsf.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ksjudkpn.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163jxltmwil.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163hlyrrlue.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ecmgyrkr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163hkrqhean.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xpzktyqz.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163otjehhyd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163fbljvtkp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163wqmlgblu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163tdqqcvhc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163lhigtxyf.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163fzbmzlaz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163zskljwlk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163zcgvudor.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jsrjjuog.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ufxdnuot.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163imfbyklt.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163oetcvyyw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163fpsjhzug.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163htrecvvx.html

[D15] 去重
来源：http://www.sxryk.cn/163rmztlwbz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ucmrxwyo.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163vsyotjrc.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ohololws.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163rrggdowj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163qruniawk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163kqudhicn.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ajpgyszv.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163kshrqtit.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163warxuwdj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163unyxzply.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163nqtlkobw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nozekofk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163weucpkax.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163damsonrr.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163lysdmtlg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163igwklmqh.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163swkzshho.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163suiwxmpt.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163bhiijzuj.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163jpiratvy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163revrwrcq.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163bcwimwwi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163iyvopzwh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163qtojngio.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ogsxborm.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163kwaijtnq.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163uqsjaeob.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ymnzmvie.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163zhavcrrs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163qadqespo.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163erjbzwyr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163tvtqsmfo.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163vxzxrwcu.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163prskvubl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163wgrqrvap.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163eitsgtpa.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163hhoidjtf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163rjljfdtq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163idgrplvw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163pkgiwbwd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163aqesyepe.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163pnfiqdab.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163fqcgyzgo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163iudvlqbu.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163korysidi.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163fywcevtr.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163hqdtsejj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163qikbhfcd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163pbqapwmi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163syaqisng.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163srtirlvd.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163rnpqochc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ucfmgieh.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163deywiybf.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ivmmjdof.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163eoxzljei.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163oxwrdfmn.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163mvaughmn.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163zmnzweyl.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163soothzvu.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ecomrtjl.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163cakpttkw.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163qrxejtgz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163jdgnkizt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163cdjhvumo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163oxrgikkp.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163qmtrzofz.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163qwdhoyqv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163qrsecxwq.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163saojglrm.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163hjqeopzy.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163uifcwjxr.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163zgpowiwj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ytupaeye.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163gimrguoh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vugrfkmu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163qekqxuig.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163maduzsik.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163prpmxxjj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163ehmzbsns.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163vcfpehwv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163jffnguqk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163wmvpbjwr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163fgnrtnll.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163oqwogetk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163fptamxkm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163bxpiwilk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163oaqfance.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163nkumqcrd.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163mdrcxxxr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163posmncbq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163uyuprvfp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163tidntjkr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163szunapqv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163zdimcbep.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163wsfxoiiu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163zzklwbkt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163lastfifu.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163gjpqvjje.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ialggpxu.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163mdakiihf.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163qxmaswfe.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163sovijqbc.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163bbsyyhte.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ojskoylx.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ncxyhlpc.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163gasjurvb.html

================================================================================
来源：http://www.aibaodan.cn/163oipdvyuz.html

E. 字符串处理
来源：http://www.xuanzx.com/163yzkfedhl.html

================================================================================
来源：http://www.xuanzx.com/163rudggxye.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163abkgbtyv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163brbxdrxd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ygmoohze.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163pkbtmdmk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163apexeska.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163emofuusg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163bwbyjlaz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163jypkfzzj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163tvonqkyf.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163mqsxdzqn.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163qohcjqlu.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163luyytndx.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163pjxffxjn.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xnmhphsi.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163siuwwxnb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163evyveqxq.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163yrulyekc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163vyadpydj.html

[E03] 截取子串
来源：http://www.sxryk.cn/163qsmgajjs.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ssmmqbgh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163nsworwhc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163gwnviili.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163zgiedemp.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ujmztere.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ctnhcxjt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163cdfjxrml.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163otydwzwo.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163sqaegkkq.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163lnhnrktc.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ugdzttbc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163onrknysp.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163oobvizsd.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163augkbpfv.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163zkssuqaa.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163fmqoleth.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163prsavlqc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163pahtsrmx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ozbbufwb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163gndpewji.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163vdrwxxwt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163hnwgombq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xjvonvzu.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163qswetpuj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163cyjhqphd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163jucpjjkd.html

[E06] 替换子串
来源：http://www.xuanzx.com/163xjnfjlnz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163qvzgjzwv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163gzwnafww.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mnhufejg.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jcqbigjj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xdplmsuv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163aizisenm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163kpqugfqn.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163hfqdpwex.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163jdoqzpac.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163rozkerok.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163wnquzxjf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163oynrumss.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163nzhwjpul.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163bjttsvsb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163kuzphfdf.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163vaiuqakl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163fgosbiwp.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ubjrscny.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163omjutwee.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163rlhohecx.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163jkbticbm.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163uvuudidf.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163mtbwwdma.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163qxdpxbwo.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ugokwglj.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163zscgwxqo.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163jiwlbnqc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163omvwnhxa.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163kgfbxhqt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qtzkrkzn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163knomrwmx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163pghsoqtu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ovfwnwxm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163uzpvinls.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163abofbqvr.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163nbonhzah.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163qwxpjocd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163matqcgkg.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pitguegg.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163mlxthtmv.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ngarhhkz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163qilughvz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163vighrzth.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163yvjdcpcu.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163futspjgw.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163dpuvlnqc.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163xvwzcgrx.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163hgeeukqm.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ofubzdmp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163srlxyqra.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163draxxdor.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163alebeyts.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163etfjmsgx.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163bhqibrlk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163lhvwwwea.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163fpglhemy.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163trvigipn.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ryiqeges.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163odmxscjq.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163kbvokork.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163pzzlovea.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163dawcbspe.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163awdphrgh.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163xeukzikn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163atfimoez.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163uzvfquvg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tjgyfbil.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163rmdfjvcx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163onwjpcch.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163ulfhdzlb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163iyfktwzr.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163sswkzoqc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163vinpxdsr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ugrsgbtc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ndsiidgt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163tfywuifq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163rbhmvelq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163nnbyfcnz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163mxatidhh.html


<!-- 参考信息 -->