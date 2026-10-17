外链999!wailian999！

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163rzvzjnue.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163raqpiuts.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fpxvmiww.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xpczddht.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163dvnkzwzs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163bipmkvxw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163awnfozeo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163drqcbfoy.html

[D11] 反转数组
来源：http://www.sxryk.cn/163dlrtvvss.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163thewxwoa.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163hdqyjjbx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163mmahfghc.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163buaclwnr.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163mwbkediy.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163mndhheab.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ndchsrqd.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163wfiyodvq.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163jygzfqwe.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163tbkqocva.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163wzvhaplm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163eiwmmwxa.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xcmnhtii.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163szwubgpl.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163btqpjsfe.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163almpmnje.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163ggaxfhgn.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ibnbfdce.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163tqrtycpi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163loqxbceo.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163frtjgmwc.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vbycgkou.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163phmosufb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163nabhmofq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163wjfoomaw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163oqbpouqn.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163qcvkmwvy.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163vapzmeqk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163pnbylyne.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163grpynyqb.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163uxijxvub.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163yolbcefv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163iufannfr.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163gnerhwgv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163xgvnhhzz.html

[D15] 去重
来源：http://www.xuanzx.com/163lswruzcj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ghgmxiui.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163mjadyzph.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163domfkhjd.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kvqrbzqb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163yvesrife.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163coowyvkf.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163kytkyccv.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163vudoubyf.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ylyznznd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ahwrmuno.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163tqyvbirg.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ptjdsvha.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163gferqltv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163pjpqtvui.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ghtelziq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163tiisfnef.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163qquovlup.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163sgvhtgbs.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163wxaalfde.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163cibcrjbd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163naaxoayi.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163hinjwapx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163xhqusppo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163kgueviqx.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163nsabcfyo.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163tzohjfyw.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163dirvykev.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163hmwcbiuh.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163trffprop.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163glpmtoqs.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163owoahtxn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163jsloprwj.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163jmjrxkdx.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163bskndljh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ioycwfhu.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163zlppgdsx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163cfvuwhur.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163mjmgyzwt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163omtvjmul.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163leahnfjc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163cbwtyvau.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163pjnzkjlg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163cqzcvxkl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163wmnvvzuz.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163zgflhehr.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ybcyxwue.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163qnvmcjeg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rtagbjwu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163eggduafc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163boolrkpj.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163snrwelng.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163qygirenc.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163athgxzvs.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163jjhxtyxd.html

Py:   x in arr
来源：http://www.xuanzx.com/163yhskjldd.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163uvqsbqch.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163kcbfvxls.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163njzayzes.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163wtjhnwqf.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ysmiltzi.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163shehgotc.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163eznzzfrk.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163xovqprri.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163atwowijp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163wwlkiokz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163uaggaoph.html

TS:   [...arr];
来源：http://www.sxryk.cn/163amyscskl.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163nbitrzjh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163srgagxoz.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163qfxcnscg.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163gudwkmuz.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163icyqmnbs.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163weerykps.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163dpjspnji.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163nhrixfsn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mmpxesxl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163twddoteo.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163moikddqm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163vcitkoss.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163boeziqdw.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163tiwyenux.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163duembakg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163sihgotuj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163wypczyml.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163avekifih.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163mjofeboy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xrbvibfr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163qsyunpzl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163cowuxkue.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jjsdhsat.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163dujlptbl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163eqyjhoit.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163fdjsadeq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163qmhifkaq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163sjyqayxs.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163slvghqlq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163gpzvswlf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163hlapyvws.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163visiltvm.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163yzaqnxjr.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163gahmmffs.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163knffhjkh.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163utyckfzt.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163kqonylfk.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163dmlnirnm.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163tjayaumo.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ocnrtifj.html

================================================================================
来源：http://www.aibaodan.cn/163nzafsbrq.html

E. 字符串处理
来源：http://www.sxryk.cn/163ustzstny.html

================================================================================
来源：http://www.sxryk.cn/163zaozhanb.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ekdqkdls.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163rlxixwdb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163avmrjtgs.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163famlthpm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qyrrfphk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163vkjmrydz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163cwztubsj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163uadbscjy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163hkufxioo.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ghrbzzth.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163idlodpwh.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163knshqcbo.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163xfhfxvjp.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163gksipeiq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163cvdkrfru.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163lcmlzbng.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163npdrgjuo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163cwshlaml.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163sftvznqi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163pxdttzpq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163milqmkvo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ttokamho.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163hxtjawre.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163lflwjvby.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163kfaehodj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ggyoagba.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163utwsgmda.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163rynstzgk.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163dnjmfeux.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163clguwqhf.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163pausqpop.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163djsciwbp.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163xjxhapoz.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163sutyqfxd.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163quyzhyji.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163anmlrkhm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163bfzqikro.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163olaxvusy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163dhwlmvlp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ydwtnpvv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163wywhphti.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163wjzgqtox.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163gerdibsz.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163waeiajvw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163tjoiuiiy.html

[E06] 替换子串
来源：http://www.sxryk.cn/163oahddkat.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ztpakcos.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163pwncvstx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163odorydqs.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163utdartvw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kwgagnuk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163jawucoyu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163mnwpeurk.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163lcfvmifz.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163imopxuyr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163wyeryoib.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163wtdjmmod.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163cocpltzr.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163bfnwniox.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ifastzdu.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xbjtvleg.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ejvsqxcu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163tgibnhtd.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163tpteijwq.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163uhwoyyqi.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163nztgjrnn.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163uvoxaqtz.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163zrwdornx.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163eayflgmk.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163jqoigufq.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163jwcuntuy.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ctbzahnv.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163rlqinhtl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163dgbzyvwa.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163lqjdttzw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163attlnzqq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163koqcrheu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163zdujnjzu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ltlmpdwx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163weqgqxnp.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163uncswzbb.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ykndjpxj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163vpazjyha.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163akfrgbsa.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163lfynqibs.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cnvlidyv.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163nvzdqbcl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163kvhsccld.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163nhxvterf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ebtsuufg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163ncmgslps.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163gcincthm.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163dpgmqlbj.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hbomfozs.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jcinjdcd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163yedcgnno.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163fuxtpkih.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163siyasxwo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lxfmlhtz.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163nitqhzwd.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163yywmezqv.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163wvupaktw.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163cdhxfdgv.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163xwtgwjmr.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163oikxckix.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163nmxeuvyq.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163tamuoydy.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163wuzvzklm.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163zxkcxiin.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163yrprdlvf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ktsockfw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163wmtvofzr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vupkgjab.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163pnodhdlm.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163bxsuoeem.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163mihkkjdy.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163sgamxijp.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163kdiguunh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163kjameost.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163xvvbmcxa.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163yoyvgtau.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163wracqhwf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163emgqcwwg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163cjwjrwdr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163rzqvchqz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163hfikuais.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163qettytim.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ubervejm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ufkmxrwj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163vimrxpes.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163npyvvekn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ckfjjcxc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163twrwmhel.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163vfpfdtqi.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163qowrqccn.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163cmuweewj.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163fycbcimt.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163pjypsaex.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163tmxbzvwf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qzcyuyih.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163mouzfbme.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163yorfqkhc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163kwdbviym.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ekcfnpos.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zcetogwc.html


<!-- 参考信息 -->