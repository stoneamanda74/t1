外链999!wailian999！

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163nduwbiji.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163mfgqurzq.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163xptklvjr.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163uubpgkmv.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163toediywm.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163tgwxjlky.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wrmthygy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163thagmord.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163nnfsdkyr.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163yedywted.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163jiyqpksv.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ossucrkg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163digvjdzo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163efuayoes.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163vzdcjbie.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pmatzanq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qdpsiobp.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ztssrtnw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163dgtzojsz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163fmmkgjlt.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163bikmabse.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163eajwjkor.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ahvfnuxk.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163mwczykyj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163tdeneylr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163hqqcyyvn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163lgwxctkj.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163chuwjfzu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163yjscmbzx.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163mhcmdogq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163zoshqgus.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163zktlvysj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163txibomsa.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163zfvziboy.html

Java: // 无解构
来源：http://www.xuanzx.com/163ixddalnh.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ayrpvdbv.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163wyidqkdx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163djeascqz.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163gvhvnfut.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163mqrwlmyu.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163kowuleur.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163mqkijsoa.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163gjqjnqlo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163udoqsbum.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163cictswie.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163bnzsdrbc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163lmkcxgxx.html

================================================================================
来源：http://www.aibaodan.cn/163pgjiyywl.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ndzadtkg.html

================================================================================
来源：http://www.sxryk.cn/163bumwabtk.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163qhhoaepk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163zssmzabj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163rkdarwkz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163xjpiblwh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163nrlqksyf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163zhboihpd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ijtlajrq.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163gjtyzkfa.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163anrgxjaf.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163hxuxnaei.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163jqkylcgq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163zkhgwkqe.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163uwnjbkye.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163bvtsegfa.html

Java: list.add(4);
来源：http://www.xuanzx.com/163vasnzblm.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163aqqjaaef.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163vlzrabfw.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163yvnolrbv.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163hdtmgbvr.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163unzhuvcu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163fvkrjssv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163kwyyhcvn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163bkrmqdky.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163apdhuysx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163zycufgdf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jdvaxcvm.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163vjtdwclv.html

[D04] 删除元素
来源：http://www.xuanzx.com/163umpzxobz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163juhsduof.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163awxsvsvj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163gtuncegu.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163tddsukul.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163gxoujqwe.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163uilasotm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163qqznrbxc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163olqkduwu.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163wsgbqdjc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pezptnpz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163wmjoeotx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163himqqfmv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163fctfgbmc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163xhmfnqic.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163xxzfvdwv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qzssepmg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ditrsukv.html

[D06] 数组长度
来源：http://www.sxryk.cn/163avbaocoi.html

Py:   len(arr)
来源：http://www.sxryk.cn/163mgffdgsy.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163wfzatiop.html

JS:   arr.length
来源：http://www.xuanzx.com/163gzxdczny.html

TS:   arr.length
来源：http://www.sxryk.cn/163tgxuedmp.html

Java: list.size();
来源：http://www.xuanzx.com/163ogprxokl.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163jbsykbxq.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163caqxivad.html

C#:   list.Count;
来源：http://www.sxryk.cn/163njmiluyy.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163uzuzdqjk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163eywljuly.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ipkbjjxi.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mmwgtgnp.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mwynyhos.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163jjrukmqc.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163flapkswo.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163uuciktbm.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163meglyxsm.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163gnqoqpba.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163dcjybnue.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163hlqarfns.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163lkkmqznh.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163kvhxsfke.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163pftazwmb.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163whcycgpg.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163bzizewob.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163nyhdgfqp.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163lgiemjjs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ehvgdfkg.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jitouwve.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163rmnwqogq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163xknemzrf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163fdrrrvpc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163yyblizpe.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ietroxir.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163nntkqlqj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bgclnqph.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163vrnjhkvw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163klzijnyh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ihxlvfib.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163kolxsszy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163drmabwse.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163hapcrplk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163yfsjfnxp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163apyrianq.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163fmfrukiw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163xgwpskrx.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163aafrvykw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163urgzvygi.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163wcqypjkg.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163puujeane.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163libxfhfh.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163zpumzekf.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163bvhxmhzp.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163oogiewfc.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163tsoglgel.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163jgpnognn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zymrmugm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qjyhrwlg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163wbgeplsi.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163vxkvxqmy.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163jiknleis.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163wswoxirf.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163idlotmgy.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ikgvdhpi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163yudrjmij.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163zrpgswvv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xfcreyfb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ajdafymx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ixnjwtrw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163eywtvrwz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163lkwvhdna.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163tfxvcycf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163spvngjaw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163nurtjfwh.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kpthoukp.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qhdjivte.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163zgmsjuti.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163txcmpplp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163zoyuowmu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163vldtlszq.html

[D15] 去重
来源：http://www.xuanzx.com/163atgbiaug.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163cyjhstxl.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163gfhcyldl.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qbqllukb.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163pysmougo.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163pnocmxpi.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163wpizbrht.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163hxtnjgrr.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163xzsrlkhx.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163aikfgzjr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163vefkbgjq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163jyvlgaqo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163kfdxhejs.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163baykkybi.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ryulerqo.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ycokawjl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163baikaaas.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163dlerpzjd.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ojrgjkjd.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163pvlehaea.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163qzfynnzq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163hpywxdao.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163pmpomqss.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163hzrmring.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163irjeqmvs.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163wzvscjth.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163wzcdcbgd.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163vqrxcgti.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163hsnojqrg.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163jyiqatcz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163klpppenq.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163mhoaquzv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163aqdfdbwb.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163pggidnmh.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ogwqbxrz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163kknbegkh.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ysacpymb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163imehilkm.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163rpigfibw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163yqrrrpjo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qlwmswud.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163dinjsxel.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163btouvdef.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163autoawvu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163amhqkdvz.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163dkcvgmzw.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ojpmeepn.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163fjplpqqy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ljejxmnx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163nnlddshk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163rceazgmw.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163hhyxjpmg.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163fzwqxbbw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163cbtkzkey.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163rasulzef.html

Py:   x in arr
来源：http://www.xuanzx.com/163zcmvspbi.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163fplnfbat.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yglnwutr.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163whdtwlzk.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163gdyszert.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163kqivczim.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163sjiozlbr.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163kvibyhvl.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163cpysszsm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163bhamimps.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163fwunpjfz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163apkdbjmo.html

TS:   [...arr];
来源：http://www.sxryk.cn/163qrwjmgcq.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163oyakwvpx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163qxefkbne.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163kdrpyjdd.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163azodzxop.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163lwlmezwg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163oxttzqoc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163lcuudszk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163axyxdacb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163wcckrbci.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163sdrjvqds.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163oilehazw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163trjkdisn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163nhjurtnl.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163qlhedrcz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163stojkxns.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163qkbmkvpg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163imssbzdk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163akuxrtkj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ducoedsg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ehiyffjr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163gksbmryx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163azshtvlw.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163mhepysqc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163nnckzamp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163qpizarpx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163vhlkpvua.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163wsaawodi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163pwwapzfh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163vigjwmih.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163qgvhgaze.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163izslbxhl.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163pjkvrxok.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ehsdzroq.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163jvodnmoe.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163lxgvxjtl.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ctxnowzb.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163gwsdygou.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163myashsyz.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ryvyqxdu.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163uqpznqac.html

================================================================================
来源：http://www.xuanzx.com/163yqnervjq.html

E. 字符串处理
来源：http://www.xuanzx.com/163vkzdchyl.html

================================================================================
来源：http://www.sxryk.cn/163kmarudlo.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163szxbhqvn.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163fuwvqwyf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163vgkdmuoj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nfsskxun.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qralozmn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163chycbmbn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163lhmnntlk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163mlnhlhvl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163vzwulpab.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163wdjdcddz.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163etiqikyl.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163rvkuvxlt.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zesfusnz.html


<!-- 参考信息 -->