外链999!wailian999！

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163xarjqyke.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ryhpmcii.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163pvcpxjzl.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163zbcmuxbl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ldyruxml.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163lpcxnryz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163rtuzjriy.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163qdjmvtzu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163fznhsebz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163jnxohwfs.html

Java: // 无解构
来源：http://www.sxryk.cn/163egoofagm.html

Go:   // 无解构
来源：http://www.sxryk.cn/163eaabzveo.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163fyythapl.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163uoriorpo.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163mpulmohi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163nvhizzwt.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163vkjitlvl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163thawgpws.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163xytiwlfk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163eovkyafi.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163lqbrxqtg.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163otxqtwon.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163lhwxtlbm.html

================================================================================
来源：http://www.aibaodan.cn/163vdmxvtec.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qjvmgips.html

================================================================================
来源：http://www.aibaodan.cn/163bwciwurc.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163agwplegp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163yjiuwwvj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163fhmxdtli.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163pmyhsqfp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163bzqcodyt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xiqvljqt.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163rqgshwbn.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163nctxjkfc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163etkdtuot.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qosfvlez.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163phgadrce.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163haqesagz.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163yrvihqlg.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163zsktysoj.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163tufhuhkp.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rmbvhswk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163gqviyndt.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163vtzkykaw.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163lydyhgas.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163zpipnvgr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163dkmenkkd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163obtbtyra.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163lhptwvri.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ttzqwrym.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163lhtipyjl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163jvytttii.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163hzxlvdxn.html

[D04] 删除元素
来源：http://www.sxryk.cn/163vojhdwjf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163oowpdsbf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163vfraehdr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ajmhnpis.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163yemfkttv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163dyplbbom.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163oqoijtkc.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163axhvauko.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163fcerwhed.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163frmfpyjz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fcxctwam.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163quozivws.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163tynhpmub.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ztdfpqgb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163oniuqejk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ilfvehsk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jhwrsznd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163saklrlau.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163selxxnrk.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163fptadcop.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ijzgargg.html

JS:   arr.length
来源：http://www.aibaodan.cn/163dwqprkwp.html

TS:   arr.length
来源：http://www.xuanzx.com/163ngsbauhv.html

Java: list.size();
来源：http://www.sxryk.cn/163efvmgwey.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163peknfxbb.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163natimdbc.html

C#:   list.Count;
来源：http://www.sxryk.cn/163cowuqbrk.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163tlcfeoba.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163myfzadtb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163athxujfo.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163muhrblru.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163iuvuqntp.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163xfhbfgwr.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163twwmtkkx.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163dwcgpord.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163xfkudvzn.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163jhdqocni.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163saycvnmb.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163stgojtcp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163dntfyjay.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163zukbgtan.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163cnalpalu.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163rrlxnmza.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163geqtelgp.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163xkgfraar.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ejdnbejp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nzwjsunh.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jpzqxcqm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163lbhgpggs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163sgitwfyw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163vaeehdhd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163qqkvslwa.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163irwyxmxe.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163xafepfhc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163yeztfyqw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163esmnzmrz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kzfgrowk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163dnehvmcj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163rxcydtas.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163vgguxapd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163adpxvsqv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vtbttngj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163cqmquyhf.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163augkjwxj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163dvtgjzgu.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163gskrreqp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163nsottuhg.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163qyivviih.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163esusfked.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163uxmlmsiv.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163rschnijf.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163wmmdcvzm.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163nhlmzcqt.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163jfyhcvpv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163iyykgbbp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163pvdccmns.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kukjhtdz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163krbgviqr.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163hwbehmhf.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163qkqtrifp.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zwujolsw.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ccjhrwtt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163jeoxjfmf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163wxjwchdb.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163saidbmlv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163zbibhtcj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163zgrozksc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163kmdbuvpx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163puurjszn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163qymsqykg.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163hxnyvjqc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163uhqogbvu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163xhbnuevv.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vrnbhgcn.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163dsaudrcx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163kkziqjul.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dpjxlgec.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ywcwoaqe.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163nphvqigu.html

[D15] 去重
来源：http://www.xuanzx.com/163mpciznww.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163nellbksp.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163oxsegtrf.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mwyerbgl.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rnuwbvht.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163uohhglji.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163vtbunzji.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163fncpyxfp.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163kwjzqsso.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163jgmtoahx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163njshgzhp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163lzoyujgv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mbbzeicl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mbexjkak.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163ufflbgrl.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pkrrchvo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163wnuhjmne.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163fasegyzn.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ehsqpakp.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163uimrthtb.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163nobitxze.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163sumgkogv.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163fpqorvdh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163zsjzildy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163mzkcstyx.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163hfrltbfc.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ladodbat.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ssnwkefa.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ahlqzmgu.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163izywmfby.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163axogjdfc.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163esesicty.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163svdcwhsr.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163syavyddp.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163mejyzjgb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163wjgmkozs.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163cbajhiho.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163tixfkhdd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163mdkwkhxh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163jfjgbxtf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163glzcfjha.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163wscqpiwb.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163vnttdfyx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163rlqorcig.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163emjreuic.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163kbgqqwls.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163scoqguxw.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163jelbkdno.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vmwjeuub.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ipslenio.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163nfopyllt.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ecqptcqs.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163lwxkbysa.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163yoapnvxk.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163gvtdwvwl.html

Py:   x in arr
来源：http://www.sxryk.cn/163trzapftf.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163zmaokqlc.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163laqyasds.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163hpksuwvu.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163jvawfsjs.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163vvncyumn.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163qsdhrpvl.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163kbiatnyc.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163pziopfcr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163dzvegmwa.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163wxqkxdkl.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163fqpqersn.html

TS:   [...arr];
来源：http://www.xuanzx.com/163wwkvrkfr.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163jpcjplqk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163hcjyhkxi.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163frbeqype.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163iorpivpm.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163aimrjwnz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163jdvutiyr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163deuxzxai.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qlzgtybq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ebdwbazw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163oybposvj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163udfjtkql.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163eiumyjak.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ovmvoqfg.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163mzrbjsab.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163eaemllnp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163raladfbr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163cznqgdjf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163fvoylaox.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163vpmnadhq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163pcnprgfg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163hwrwxfwd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163sdwvprkj.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163zipzvjsz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163dtkmnevk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163kpwsrfdy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163enkxszvw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163pogbmzay.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163qngtqvyx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163iupjgjam.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163xsdmfdtj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163nkwqtlgz.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163yshpsoft.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163bafhwaax.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ykqoycfr.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qgoyipxy.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163sgmtqoaf.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163csgorpgo.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163ibwykdeo.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ujqgqwpt.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163qfhubxwe.html

================================================================================
来源：http://www.sxryk.cn/163gyulhsev.html

E. 字符串处理
来源：http://www.aibaodan.cn/163wklxmbsf.html

================================================================================
来源：http://www.sxryk.cn/163qriyklwo.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163bhcaovmw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163wogimvdz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163fiagbtvm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163rddqscts.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fxyxsbto.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163eohpdojg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fgpdbssr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163jivjcdjz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163xrniviac.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163vvpgsjgj.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163nsipvlwe.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163bahlwywm.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163gnrjppxx.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ssgemphx.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163dpkonbwo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163kjmzbvee.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163veaxkuxr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163btvuuqha.html

[E03] 截取子串
来源：http://www.xuanzx.com/163cdfffxyi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163smjukpvn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163bbwfeveu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163yusgdcer.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163mcsqamis.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163pzzvranm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163wcftohuj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163alpafkom.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ieeipuqk.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163rnubddhw.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163eftxpkca.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163yqjxxnlh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163hdtruvcz.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163vvcsmxew.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163qxypmcjv.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163saysnlsj.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163eilyqycv.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163dweulzow.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163wmvpqifd.html


<!-- 参考信息 -->