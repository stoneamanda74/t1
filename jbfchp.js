外链999!wailian999！

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163uljqxknb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163szeicksm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ncheccwn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pugugyka.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kuoexeqo.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163zujoidqu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163mjlhkfgg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163thtfthok.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163wxpnxziy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163pipcncsv.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163beujknkl.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163jednoged.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163amrhtqft.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163auveqrwf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163exyoqtcn.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163xvkgdtjl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163oodyqgaq.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163qrhrorba.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163rbujycwo.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163orjwajgq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163mmgrrbvf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ftgzkknu.html

Java: // 无解构
来源：http://www.aibaodan.cn/163egyhmnau.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163tslrxdjk.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163haurbpap.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163zyrtoojk.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163wxskuepv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163bcaelrvy.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ekzlhkwh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ttdcdnbi.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163nfufjyep.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163fkmecszl.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163cokrxgor.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163vrcnoamv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163aexfmhrr.html

================================================================================
来源：http://www.aibaodan.cn/163gcozcuta.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qlnsngcg.html

================================================================================
来源：http://www.aibaodan.cn/163vbzeimnw.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163xerehnpu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163mdplxaoo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163mimhvbbf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163nxgiztkd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163nfeuiout.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163yevaqiir.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163lbhlmwfb.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163qxvylkcq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163hjjenvxa.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163kvgvllhs.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163hndboqfj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163kyrjgryv.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ojwufvzm.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ncoiupuh.html

Java: list.add(4);
来源：http://www.xuanzx.com/163lglbgqsf.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163qkjptbnq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163yrceivrn.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163jsmlmqlb.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ihlagtwk.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163cjinsoyp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163qapbyjdr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163gxjyjiky.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163tflcxndm.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163hbxoyovx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163jclpmpfw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163uqciexsb.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163iykqisqb.html

[D04] 删除元素
来源：http://www.sxryk.cn/163jawvknfx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163gnunnsmy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163fxtirrqs.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163jigqohsv.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163tmclqiqc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163agfkglim.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163vnmaofxl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163rzlqehvm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163zdqdpcuz.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163umhkjuyx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163bellnnpe.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163lvlnrbvi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163mtlsraef.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163scrlfdzk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163itsqujpo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ygauunqe.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vhznhchg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163dqgnxjnm.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163odqzcrms.html

Py:   len(arr)
来源：http://www.xuanzx.com/163fxgalmlg.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163zsjjgdcd.html

JS:   arr.length
来源：http://www.xuanzx.com/163jyhdqgdk.html

TS:   arr.length
来源：http://www.aibaodan.cn/163qidfislf.html

Java: list.size();
来源：http://www.xuanzx.com/163uutuckxk.html

Go:   len(arr)
来源：http://www.xuanzx.com/163mejhajkj.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163imjnvtfg.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163bgksbusf.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163chsthwrq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163xvosbkac.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163igpxnyxs.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163inhudmqe.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163kvgyqcet.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ddsycjft.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163lqplgjdx.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163lflusqnc.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163yumisbps.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163gelfpmxi.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163orffsnkl.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163usvdvoui.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163goftyvkn.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163yifcpkmy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163mxjsnvwd.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163tnzdmmvv.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163helopupe.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ujgkghko.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163fsqnrscd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163sucquieh.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163eigfheto.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163gouovprx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163iixetttn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163uxwsfmlg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163exocrjda.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wepstrtr.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163eeygseou.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163yvvjyzkn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163iccjzjhe.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163pyydqpae.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163emxonqba.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cpcxldsa.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163nfivnjaz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163fwuktsxi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163okxktcuv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163qdfopagi.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163tgudjwzh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163urusadch.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163cgnvhsmn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163pvzgogwd.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163wcgddckj.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163qtvmhlzp.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163abxqnrrk.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ctjgzsxw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163qvnhzjvf.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163szjhiqpp.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163wvmdwpxf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163julmcwny.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ymvabvhg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tmgcnimk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163lftytexm.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163mejyrrkd.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163uudtzvlk.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163brwwalgb.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163mttfnqmw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163mjrrsbmy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163rasvqims.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hqspkydm.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163finyjjph.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163klvyggul.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163zewufedv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163jkfpkabx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163usbhigyg.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ldvhpsbi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163cmnldodx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163aufhkpiv.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163agigashm.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163dyoxpbnh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163pgdchrso.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163twlzeprn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163fivdjkyc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163styhmuro.html

[D15] 去重
来源：http://www.aibaodan.cn/163uintlxbv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163eiulwzgw.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163prmclxoo.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163iwtnfvwj.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163mvpndeir.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163irfczavv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ofabldad.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163mnhzyoty.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ukyefuwk.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163dawfbpgd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163odgnchba.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163hgyqrxok.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163gbcypbgh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163smqzxpgw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163dmitzwcx.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163fhrfvhbn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163uohneinc.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163eynextnl.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163uiyguvok.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163yntcqwnj.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163rfmdolex.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163afmkntqo.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163tolivsuk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163galymcqz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163rwzkkhen.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163mllloqnj.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163gobezmor.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163utmhuibe.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163amcfyxvu.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163mendkzxr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qagvruil.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163isalcdwm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ojerrdze.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163zkyfdfoz.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163glhelfnw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ejgtzafg.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163skotvnzw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163shcrwlcs.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163aqodihls.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163phaoqsuh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163tpfedhib.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163edbvpoby.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163hcitadhd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163wjuurshe.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163qttgufbc.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163swviptcc.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163xcujgadn.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163heugwzod.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xikjwakv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163hfkfkjal.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163xjnzsxub.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163qbhggtat.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163tvbvlqrr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ykidhgfs.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163bpiumbbr.html

Py:   x in arr
来源：http://www.aibaodan.cn/163nfseflwv.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163cqejkyia.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163neziuunx.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163gwtpjdtq.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163odgjrxmd.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163toetmlya.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163wqiooppo.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163nkpxrabz.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163joocwqta.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163aohgyccj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163kcrhlgkz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163msarbccr.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163werbvwbc.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163kbkfahmr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163wwgjxjde.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163imevpvui.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163rcklsdcl.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163zdkhkypy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163gnpckswi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163untnhdka.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163patrwfjx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163tbxeobhf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163pdhuzmwu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163oowuuwxx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163qcuhhtfl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163gpsycfqy.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163tyfhvmvw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163qbpfoopa.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163weekwlgq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163ytzbltnj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163clcudmks.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163jnmowieu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163flrwrxgv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163jbilxtzj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163gqrxhtcm.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163jogndllk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163tgpdimrd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163fiisnebq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163aqhztlhe.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163danhhenl.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163egeproka.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163sqjwufhi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163knlnzdjj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163daovlgzv.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163gdtcstol.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163donedcvq.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163thbxjymx.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163epurikzn.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163bjhonwuv.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163pdnyczsg.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163lzzjyktb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163qmknuxtk.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163rdodxwba.html

================================================================================
来源：http://www.aibaodan.cn/163zfqxfxfe.html

E. 字符串处理
来源：http://www.sxryk.cn/163svvvgdov.html

================================================================================
来源：http://www.sxryk.cn/163rkxlrstx.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163zobvgama.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163xrpbbalw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163cmhgkyxo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ywfymqzz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163dpdcikve.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163zaaadqms.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163dtlshmxe.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163awwindiu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163hwforyvq.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163suvypcet.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163zxxbarmy.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163pyhdxhqs.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mokygqah.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163whssafdz.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163gnzgjxpn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163vqtcmkgo.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163hjoyuomm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163dcaivqnr.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163jegzzxsq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163rltjfqkb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163usoxxphw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163fjmartpc.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163bdalnhxt.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ljblspmu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163mbkujjbn.html


<!-- 参考信息 -->