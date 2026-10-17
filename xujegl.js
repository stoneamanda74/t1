外链999!wailian999！

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163vmhmvuko.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hosfulgs.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163svpgasuw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wnboxies.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gpibrbzj.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163pkljhmui.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163vhyzifkq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163rlmndwpk.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ecweikao.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163lqekuxkh.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163qghupafr.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163eshpmrlm.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163gpwqkrjp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163unxnvyxm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163zonokszy.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ihzyqdni.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163xjlainii.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163hkgnoqnd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163qvtqfrcw.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ywjqxgwz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163gnspaxck.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163aklxxzly.html

Java: // 无解构
来源：http://www.aibaodan.cn/163mlgoroyj.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163mpuefsbu.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163jbbrgroy.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163fwtmylie.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163lhhghyzj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163zmkpirak.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163xnslvkzg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xpibwhnx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163uwosatgh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163hxzrlmfa.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163wksamyhk.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mvkqsmsb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ihcrsfao.html

================================================================================
来源：http://www.xuanzx.com/163avclfjjh.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163acqysjhb.html

================================================================================
来源：http://www.aibaodan.cn/163tgzgvork.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163xltovqbp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163oeuhzyks.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163jyuaaadc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163hhrxptsn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163wohvdjmv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163epxjnedi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ykgolnqr.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163vkauiolg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163jzzoffio.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163cfydbdql.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163upzbxvkd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163hcrhuzsn.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163xgterbxb.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163chxxaipv.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163jdqnrmbf.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163fmqmwibd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163suzpcear.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163qsrcboqx.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163eyelsuig.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163sffblsav.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163iehqsylq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163pyddaqfu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ymuzelgr.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ctlffqks.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163xwbtwykw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163zsormxrq.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163uhghntvs.html

[D04] 删除元素
来源：http://www.sxryk.cn/163lsttxiry.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163tawhyhtr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163aciseird.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163mygcrrqh.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163gaikycjo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163yajrokmf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163xojeuyor.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163sttvcwgz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163rzvhpdwi.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163mkypgbex.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163nxuxkrxe.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163sjiomkbu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163zxetbdvh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163bdioxidc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163jzhnahot.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163djdjhgia.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rqxnshag.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163quzxwtik.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163urppbvhq.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163cicldtmd.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163czmeiqis.html

JS:   arr.length
来源：http://www.sxryk.cn/163epyzvfik.html

TS:   arr.length
来源：http://www.aibaodan.cn/163rhjztdvz.html

Java: list.size();
来源：http://www.sxryk.cn/163wxoqzuyv.html

Go:   len(arr)
来源：http://www.sxryk.cn/163pghpxwxm.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163aweuegha.html

C#:   list.Count;
来源：http://www.xuanzx.com/163wpyrnzly.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163oukwstjm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163awjjloqt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163qnhujtnr.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163nsovgwhj.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nnkhsllj.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163nyrbtbbs.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xrsyyyyu.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163rywzwcac.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163jvybmahj.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163jcrfjtrr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163wkxrtjdt.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163xoonvxnk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163mvbxfuxk.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163dojexpsy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163hylqmukr.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163qxjbwvux.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163nzxpblqg.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163qulmrxtk.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163mcwvvibg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163mciznxzl.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163qgmpreyc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163rfjnfvim.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163fuwfxdsy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163mpcfjrne.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ysijgols.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163byeufcln.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163nsahcsij.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163inxoglbf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163lcptlcwk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163rcymnbtw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lmqywcxi.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lubzozra.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163kjonntqe.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163molzcxeh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163acpkfbls.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163olufbmwf.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163evgxrcew.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163cmkpxczg.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163tsuecgqu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163patpxase.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163lhgbypzz.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163xmiawjei.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163hxwxaime.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163qdmudhvq.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163vmkthype.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163shnklxui.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163mfzxzcsa.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163fmitzeyh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163bgqjjkuj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163fsfnenjq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163gyjdrxpa.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163vwpbfdqt.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163yfylyguw.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163kqvegafs.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163qhqwxsjl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163vqlgjnll.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163nliznqvc.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kkyzysel.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kfinmsqo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163xwepcvjd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163dkihcfot.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163zumnpkqz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163wiqbxaod.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163pvwhbvmi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163gndajjnt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163tjrlbccu.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xsupnwvf.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163othpdunj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163kdfezpjm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zeqrdndg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163cqydmopz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163cclkcepd.html

[D15] 去重
来源：http://www.xuanzx.com/163bkjabmol.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163fvarfgvw.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163mbuxoyng.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qywmbwhe.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163czttmkcf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163dpcnlpkh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163savccxkc.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163mktpstej.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ndnvaiqq.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163zvinofmd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ewaiwgjd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163mrgyjqea.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zdjlxvnd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vnqemxgw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163dcoajtyx.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163iguwgctb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163dsilllhl.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163vceiffmg.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163kiduxreo.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163wslmfeel.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163dovuxqqr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163zyoqnoan.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163zxnsafkw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163wezsdpbd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163dmkougkg.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163iqfdjbgq.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ejihbffp.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163jqxhqiol.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163tztfhelf.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ytqxxeni.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163izujogqa.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163duhicajj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163rqqiuqdr.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163vazhtdfj.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163cogrpcre.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163bodajunz.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163pfwpxylk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163uymwvyas.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163omcqfdsf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163jwqblrxu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xcwzqjaz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ihaqwqhu.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163nbopzrgv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ttwfpgus.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163otbxwowv.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163wjvyopbl.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163mmybolmr.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163girigemv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mnjrbnpq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hapqqulx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163gypshclg.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163pmfssduf.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163epqoroal.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163xpdvulsp.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163cmnpjavm.html

Py:   x in arr
来源：http://www.xuanzx.com/163djuyvwxx.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163kualdgub.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163hquicilx.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yzipjrwj.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163crzmocbn.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163pclfwwze.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163vqbynyeg.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163luxoxfss.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163zhjrhwyc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163gttysmop.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163obndpflp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163byahzgrf.html

TS:   [...arr];
来源：http://www.sxryk.cn/163muyiuadk.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163hripvigw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163apqpsxfm.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163veqxzorv.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163tctnryat.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163xfgsuwbb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163vhbheyev.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163knqpyufv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163sblzbypn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163otwigabk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163eyixhckq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vknywktt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163allplahw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163cxneqiix.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163jfenifdn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163skcnspkt.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163dihwdhco.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163nnwufdgz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163vvwkemzf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163vgmqtszf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163zmuhhjaq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163utldcbxg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ibuvekxq.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163vpdqymor.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163zogvevxj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163zlquftto.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163jhkymapo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163rgsgqenw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163askmfwyt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163udfpbuix.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163cvoigtik.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163nztdpknj.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163oyqvrkcj.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163jxcainoo.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163nesfoyyk.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163dquvykxo.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ncbuosxi.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163bhqxaxqd.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ykqotfdt.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163njghmxdb.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163nkxhmrce.html

================================================================================
来源：http://www.xuanzx.com/163jexhrbky.html

E. 字符串处理
来源：http://www.xuanzx.com/163rwqstrvr.html

================================================================================
来源：http://www.sxryk.cn/163bouwpjvs.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163mpfseibc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163qxncunlj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163nvdzyjdk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163spadqwfo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mxhtwxdl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163xnhrmgou.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163iubenqdn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163edbkztpy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163inrujcfi.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163rujzvjds.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163znrmpkfz.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163mpagteqq.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bclvvugh.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vuxqcqne.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ystqwvgd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163tunxecyf.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163alkcxdoa.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163kwmgwudz.html

[E03] 截取子串
来源：http://www.xuanzx.com/163quxmtnkf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163qvsoyjxq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163oharhxpn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ttuueuho.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163czqidkjz.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163vkdkvrpn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163pipikgns.html


<!-- 参考信息 -->