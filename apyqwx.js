外链999!wailian999！

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163lrcrtqnu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163nfdnzvia.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163huzdkxrm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163uclbiueo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163pxlgktfm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163kgdzvcev.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163nvqpxaak.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163fhtbwdns.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163wujjqxxn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163bgmuctrw.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163lprtmmvz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163xkinlcmg.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163srizxafl.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163kjargwpq.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163rlwcskxv.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163tqybimyg.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163usjnbcmt.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ixpeeukp.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163bgrgetlo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163znqergpb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163dandjwzs.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dnnlywvc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163etzeflvt.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163eigfvkzo.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163zooarpfg.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163sjxnrswe.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163jlltcysp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163oapokkof.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163jxndohwp.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qyzbsnfn.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hhfiykhf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163nkafxubf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163qegxzxui.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163xclqnpkk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163hqpkrach.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163cwvzitdb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163pqfzqggn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163fkoizwvm.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163cdkkepka.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163rezpmhjd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163cqrkwity.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mvwkzpsk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163ewjdkril.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163vnltzktq.html

[D15] 去重
来源：http://www.aibaodan.cn/163xijyetvu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163mwafnbmf.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163thcsbdqz.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cdrxwicd.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zckeimkn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163xuxvbgnz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163lhcsxugr.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163pjwkigih.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163vvhovcnl.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163bmarcbpb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163eoqwaiwl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163vtarbaot.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hbcbbqnr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ljxdtlug.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163bgacmlro.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163manmqcav.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163pmbsxkqw.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163vtzzbqni.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163cqmbhocr.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163pwuptqzh.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ksfjfcli.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ajxxmrfg.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163mbksebml.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163wuqjyste.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163nhpvmggk.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163auejdvvt.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163duulsyyt.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163xlepqpyc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163wdfeqrhu.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163oiglmaoc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163nertmmbx.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ozkxlcry.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163sykloyjh.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163uwywxyux.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163oaibifen.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163lujnbkrg.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ymsbhelz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163fspibbhm.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163eyuervie.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163xqrmnjri.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163wzvqiwbs.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163tedzygfp.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163qmwrbsxu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163qdxacqfw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163asmojiwq.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163hjsvmtbu.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163diqecyny.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163mjdmnoun.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163lvsnqyei.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fqpyevpp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jiasqrmf.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163unpzhmys.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163qnscijoe.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163iaakdqbz.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ydbaubie.html

Py:   x in arr
来源：http://www.aibaodan.cn/163tdrslbnd.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163vvidwzxk.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163godfeauv.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163anmgweup.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ymaxruei.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163elcbeciu.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163yyskkcos.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163kyefgxmb.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163tymrrtlu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163aieylyid.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163mhcxsnjs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163kjpfnwlz.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163uuzubjzj.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163mvzrznql.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163xadxhdxl.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ffuhqabk.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163fefrypkf.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163saherlnk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163vzlzjnpk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163pfzzxrue.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vvawsuzy.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163pyepjwzo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163gaktcxtm.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xjjaukmu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163obsnzmkp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163grjsnpzz.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163sjvodmmj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163xdkbdhsl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163jxuwxfdj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163fjqmogkc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163nstsscno.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163gibbteyk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163mrlxzape.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163dniciuuy.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163srzfmdur.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ezbfpeze.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163yknysgbn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163kjoplrly.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163zrhbuoos.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ffskhdff.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163qswwgpqf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163rrdehjoe.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163hzmfpncq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163zcafnlwq.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163kuafwcus.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jpuqbocf.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163gztlmlhg.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163pxbibfbo.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qxokkwxt.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163owyzfjio.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163moylhgpy.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163kwmynpnz.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163mniuhstp.html

================================================================================
来源：http://www.aibaodan.cn/163tacjwufy.html

E. 字符串处理
来源：http://www.aibaodan.cn/163klxhveiq.html

================================================================================
来源：http://www.sxryk.cn/163ofrdrpfi.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163hedazext.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163cupjcdoe.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163vsblmnmp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163maivgjwx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jbzqdhov.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163mhnqkabz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163jddlfeth.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163pjpuxjiz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163bzkmyhfl.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163wyswodfa.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163eqtkagkx.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163awylnepj.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163quoycrir.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163qzrwblcp.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163bfojbcbz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163uwrgzjdf.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163fyxfgbxq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163mkivnstz.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163xfaxaefv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163jovvymkx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163mojdgbcc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qwfnrdna.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163bgjyqkhw.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163kojbvzqo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163mgjgxvkq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163lfhrmcrk.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163xohtinyr.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163maujrtek.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163prensvxd.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163bzlwkdur.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jugncpli.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163znvjjlgo.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163zajkxpnn.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163luhheeym.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163vkocqajs.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163yvxssrsw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163amynsqjt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ctqhcghi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163wttfhxmc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163cewryqmc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ilupkmvx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zwycrxes.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163gbnhavjb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163yqrruhqi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163xrvyaita.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163qgpejawn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ggneeabh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163bxktscag.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bybprcyi.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vxpodhrf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163knvtsuqa.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hkifdflq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ydrkxqbt.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163butoaabc.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163hxjwyqsi.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163yuwmhelm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163nbplezyk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163hixcyjkk.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163igjbzpmt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163cfbljnbg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163fidpshvq.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163pdyherqr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163batxaafo.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163bdfeulof.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163wtpqlvco.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ytmmxpex.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163jomtcnlc.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163zycnrphe.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163mjoajhat.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163rvsqlxxt.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163goyyiyaj.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163hxbhlxiz.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163fgaidmsm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163solzbqpk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163nudqozlq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zjtjcuwp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hmqhdikv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163iizoubgj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163sglcrhqu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163cbcnurvv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163svennvdo.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163mhwhskhc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163zbdfqztw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163cwtvsyzl.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gvqiuqbe.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163rprlhrbc.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163pishpzdl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163bmridjid.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163pzzmdxib.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163coptvqsu.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163cvnskrdv.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163fnhirftg.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163nsvgnrcb.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rctjopnx.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fwgbeslb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ceuxejtn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163tolunhvi.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163tofrxldx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yibfyczq.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ymghetbi.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163iujpfheb.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163icpfpnkj.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tnjpacrb.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163pjtmmvif.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163bywxukqr.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163lauwfehi.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163coqsfaef.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163xnkknvhh.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163hyokqnjc.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ysgynmmg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163lfybvdfj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163wudbkbmx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163aoffiqup.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163pmhrhpgd.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163kbuzdckx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163lizakltj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163djxigtqx.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163wnljcxmb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ekcihrvt.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ybkfhjtg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163jxvalhkl.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163jplhgnas.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163mtiakdvp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163afvpurah.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163rlprnqyv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163uxnegeup.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163pdghkquc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163lqhiuale.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163aufpqqbh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163qxqdlzrd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163vkmksgnp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163tklpeshz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163nfkmvslf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163hqczucdo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163qpuolxpj.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163iibosrzb.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163rdwiuugl.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163lmcctxuz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wunvehqo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tsvbxnza.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163mbeswhhc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163tonzodbb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163mkqgcwuq.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163tdsdpfdi.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ioqiipax.html


<!-- 参考信息 -->