外链999!wailian999！

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163rwmsgqds.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163wvhfwzaq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163vhsausms.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163sagybvxk.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163hwclhcim.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163cfzrxbpf.html

[C08] 闭包
来源：http://www.sxryk.cn/163upjkbyyj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163gklsvdgf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163wquacwqb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163exhppvax.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kxklzjqf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ehgghgeu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163yxjjaciw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163etmttipq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ufopkmfl.html

[C09] 递归
来源：http://www.xuanzx.com/163tszdotuj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163actljkxz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163foapykop.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xrdbtoml.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163cekyfgze.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163mbcxbdtj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163cixxknpj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163nkaunbrs.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163suexfsbb.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163lavpmwyu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163uzzcvypt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ziovrzki.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163lmyzwcmp.html

TS:   同 JS
来源：http://www.xuanzx.com/163juklheme.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163xqhzaahe.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163tbxqgnkw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ngdllinb.html

C#:   块级作用域
来源：http://www.sxryk.cn/163cvlyxhwt.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163gxkckwfu.html

Py:   from module import func
来源：http://www.xuanzx.com/163kkyilfjf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ixjcwjcb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163sduxavyo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163xugntwrf.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163jwxzqemi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163pmeqeqbv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163wusehzbe.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163iilznsmj.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163qsiopxny.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vfpqetcx.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163mcojujai.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163yhielemy.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dlyucwsv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163rbxzgbfg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163lrckcbkb.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ftjigrmg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163jbvjozcb.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163sroafeel.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ynijdksr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qpqlmhno.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163rbjopson.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wfglczaa.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vmwupujh.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163bctfjept.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163fdizkuoe.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163mxthzgsa.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163lhnjkrjc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163csrqmokg.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163qldqgnlq.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163kcgkirrr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163wjmikhta.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163gwwewako.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163zwpxlbzk.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163inmlnkuz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163bphzdhyh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163htfxznua.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163vgyhbfdz.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163kgblaejc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163yiztxrsq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163bqakveep.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ucdlsyto.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163nxoprtaw.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163vujyijyp.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163yoanqvsn.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163uuwftpkf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163vpnieddw.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163jaixkfie.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163vjrucjry.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163xjfmpuqj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ukhwgbwb.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163dmcqxccb.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163qxwcghre.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163tmydiwpv.html

================================================================================
来源：http://www.aibaodan.cn/163jbzzdkjn.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163yebuergk.html

================================================================================
来源：http://www.aibaodan.cn/163ikisoxgs.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163izmlddvo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163cypeuvyk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163czfnbikg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163jvdqpife.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163thxlkzja.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163xyiepwoa.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163fmmratje.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163zvqsmqhv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163hvdwcvds.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163hlzciexe.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mjmmvzmx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163asekeofh.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163innjnbur.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163pnmdmoro.html

Java: list.add(4);
来源：http://www.xuanzx.com/163yjxcyksf.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ajflppjd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163pkhjcgxg.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163zqldsxuw.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163vglhpnwk.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163dwvldeqv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163fhcihujn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163jyfoiqut.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163gpccefzh.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163jridinbd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163funtklcv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163cuilchgs.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163phhdxjvi.html

[D04] 删除元素
来源：http://www.sxryk.cn/163oppwzwnm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163pjxnrwso.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163xkfwpnoo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163odfttnls.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163gggvylsj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ljtrqqxt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163udqrbgsl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163kuxcxhfm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163quzyvoos.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163uxdnqqzq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tjysugqd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163bdbcrgoc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163eikspenv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163wnsaflxk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163vjkbwxlf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163thpljxqh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fbtbcznb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163vgztrlwh.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ksxxmejr.html

Py:   len(arr)
来源：http://www.xuanzx.com/163plhfmuld.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163dqqoiwzm.html

JS:   arr.length
来源：http://www.sxryk.cn/163srukcgif.html

TS:   arr.length
来源：http://www.xuanzx.com/163dotvqlhr.html

Java: list.size();
来源：http://www.sxryk.cn/163plhgsmhv.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163xunhcdgw.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163fvlralwv.html

C#:   list.Count;
来源：http://www.sxryk.cn/163aiagpijd.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163eseiraqf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163sgetfkkm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163bukyclfr.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ziwnfuox.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pnuxskve.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163pxzvyrml.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163qsxnxwih.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163gpueqrgq.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163htcsiuzu.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163mpmeaicc.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163awdehaxh.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163rirocdtd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163iwprehbc.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163cpntntxb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ebtdnexr.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163wqoklkyq.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ntxjewul.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163kntrazov.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163osumhtgt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fdxascco.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163gilaqfnu.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163hixzezcs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163iaxuvagk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163hpndopjn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xdeuzgrv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163djvdmyrk.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163fgbkmulr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bxxepgsc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163rpvwuvth.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163azhgutbe.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163fcnanzym.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vklcfuwp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ebtiwgdw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163mqqzurvf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163jqctaxpi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163rlahzvox.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163icwbkuyu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163jnituhci.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163dhwkvwcl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ovfulgjq.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163sibrsojz.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163skntavnc.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163initguip.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163wfjgbsws.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163dqsockzn.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163wjtjptaq.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163nmqtmlua.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163iryoytvf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163sugultdv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rmyplrpn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163tvubkxuh.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163rcfgsete.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163fhkvvqsa.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163dljdxosf.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163rshxtlem.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163uffuflrh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163dkqumtsm.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qqcxktlp.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163cjingbce.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163iuqmekzc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163viutsoni.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163knzidqro.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163usomrvov.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163anzuipuj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163jmngqhpg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ggzlbfdf.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vyznaqfi.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jngowckr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163adwwvbch.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qdtmjdka.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163pmtqezzs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163mcramzma.html

[D15] 去重
来源：http://www.aibaodan.cn/163oqpnlfez.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163rvxknfag.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163xasxefui.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jtewjrva.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163qzkuidwc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163yfqfjenw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163gxnmzjkb.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ormobnzh.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163qowrfbft.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163hppaxtoj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163tlkiavxh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163wmjkoqjw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163itelhesv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ijwqjrje.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163zyuqpibr.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pjlbbczr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163vppcqwsu.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163moocsluq.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163yosjafnc.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163vtdkccma.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163mdgbixhf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163wfzxozzp.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163bccufrcr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ewhlgpra.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ekixqfmo.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163xweyujhu.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163jwyqucoo.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ixddaycf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163fdfenxjg.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163izmxrgvd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163lvyfrtan.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163egwazmcz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163wetvjxmv.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ldtyeznd.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163mvxukzbw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163autrchlk.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ojhusgkb.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163cqrhexgi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163yxbcjbwu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163bpcgnyre.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163nnpgopwf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ezhbhwdt.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163nikrljlk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163mnbvsvns.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163kkgwtmrr.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163tdwuegrg.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163cyabzrix.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163oajqemba.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163admftyxt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fgoceuge.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163yqthvqei.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163vzpjenae.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163slhxwyin.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163dqdebayq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163kaistnbx.html

Py:   x in arr
来源：http://www.sxryk.cn/163yaziplyq.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163kztdwweh.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163evybxhtv.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163cwrluqrg.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163hfryvzzp.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ogapinzr.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163mnjbcneb.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163xevwkggc.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163mcpdanop.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163linrwdxx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ueosgssc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163htnwsmev.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163hdrtdhpn.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ozmrarmz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163rfegatrs.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163vynbxqpv.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163akvewoqr.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163dwugygln.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163urcqwfgx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163hfxccdbm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ipaavptv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jmflspys.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163hucipgpd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163geqrjwmw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163uokicybq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163girmuwkr.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163orfnhzmm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163oxbkzyxu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163krhctsds.html


<!-- 参考信息 -->