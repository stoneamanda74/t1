外链999!wailian999！

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163szywptjn.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163jfcbpujk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ftpsgfra.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163kljvjawi.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163cxxpatdc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163auaibjxz.html

[C08] 闭包
来源：http://www.aibaodan.cn/163hddnjidq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163zsgruofs.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163emvcsozn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rkbwnbcv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cxgwogga.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163agiifsac.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163qjnofqxi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163wheunwfl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qomgwqyc.html

[C09] 递归
来源：http://www.sxryk.cn/163hbwadzva.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163vyxconyc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163owucecfc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163cjiwliwh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bssrcbmo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ydyhxayw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163tlilkvgg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163kouwuenv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163bdohbytp.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163uiuhvsjb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163wcxqfhbc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ttdxbrwn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163obwdhjnx.html

TS:   同 JS
来源：http://www.aibaodan.cn/163heaefcqh.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163rbqrsody.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163alwcynnv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163tckktpfm.html

C#:   块级作用域
来源：http://www.xuanzx.com/163gfyviccj.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163xsmqicki.html

Py:   from module import func
来源：http://www.sxryk.cn/163utpxwoje.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163qpofdelm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163jfkkkrzz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163qvetfqsi.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163whxbxnay.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163wbyxzksv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163znxkwqho.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163plykills.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163unshmuno.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163bkruqfsl.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163xrcaczul.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zfkeeldf.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163euddlzyg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ktjuhljf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163bwhjhdrd.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163zporjgoh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163alsoutbn.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163szgbhiur.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ietkzzye.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lznhphng.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163xahxobgs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yvdakpen.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jdsrlwbb.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163fgvlbgco.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ncqkwxor.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163hmcxzaxo.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163wzcivezj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ctsgttly.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163tsdewqiz.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163wcnccvwr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163taqhaurk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163qkfuodsh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163mbbfxytb.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163qsmhyoby.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ckeageaj.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163clgopusi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163uzegqcaa.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163phzlsero.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ovzkiace.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163unciqezw.html

Java: // 无解构
来源：http://www.sxryk.cn/163veuecypy.html

Go:   // 无解构
来源：http://www.xuanzx.com/163vdnvpefa.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163tpejlkvs.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163nlmqgbqp.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163soxjcped.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163shjnfhhq.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163tlttkktp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163umnwswml.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163noxcvegq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163xiuzndfv.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163fsvdrpiw.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163kheohonz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163nrxsamnk.html

================================================================================
来源：http://www.aibaodan.cn/163icntjxra.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163qubudmav.html

================================================================================
来源：http://www.xuanzx.com/163uucmintm.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163guvzwyif.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163bpmuwtmg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ivnoswum.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163lokgyixq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ntmqwlui.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163xkonygex.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163pxfjtdog.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163wdkxozle.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163rttbhgyp.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163jzijfupy.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163qsjhudlt.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163lcmixmsi.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163vehlosmy.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163evxovuws.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163mjzzdvai.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ejqsukuu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163aehiggip.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163gehsaahw.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163hedhkgwg.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163wlaatfvh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163sscclzkt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163tcxqlxtv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163bcomihpp.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163krpdbkcf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ajioskkr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163pxbojoed.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163fkskyxtr.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163upyzpgra.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163szftezmo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ngesysxs.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ldllhgyr.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163logewjla.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163eeeyeqij.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163kahxtzkw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163lhjokbwo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163fctgjnya.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163igzuurnh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163espfvalf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163tdjnyyti.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163cmtlmbiq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163iavfvxgx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163slycbhyu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163cavongvm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vjtpclvo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ztwkqycx.html

[D06] 数组长度
来源：http://www.xuanzx.com/163fvncocfa.html

Py:   len(arr)
来源：http://www.sxryk.cn/163onrisegf.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163vtepumrl.html

JS:   arr.length
来源：http://www.xuanzx.com/163rtgyvjdp.html

TS:   arr.length
来源：http://www.aibaodan.cn/163gyrdlyvg.html

Java: list.size();
来源：http://www.xuanzx.com/163yexneysv.html

Go:   len(arr)
来源：http://www.xuanzx.com/163lscfdmex.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163iocvzgzh.html

C#:   list.Count;
来源：http://www.sxryk.cn/163qnmsvopo.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ahghtqob.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163thlzoxqa.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163vhweuezf.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163uaumyaae.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163cqvsqvqa.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163lrmeohuw.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163dvcrtdjd.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163lymuwosk.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163pvabkcsy.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163zjoocwmn.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163xbeqhlrm.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163njvofzzp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163clfskhnw.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163psstoomx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163wvpvdcfx.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163wquqxmts.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163utefimhg.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163peiptjft.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163efihuxij.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163feobaujn.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163nndekoid.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163otvqdgts.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163tgbwnfek.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163dbuvtgrt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163hsoonicf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163iokfmgtp.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163owzgmtfy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163skjyxrvc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163klszgsex.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163gyuiuvmd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163gfftpyyi.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163wpdnsprl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163tzgqqnat.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ruvqoiet.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163cgunxwxp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163gjajejte.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163mtminnko.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163bcwasdnv.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163leomxctd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163rxifqkti.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163gwftrglg.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163xurjbxbz.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163pcxpxhtr.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163jfdahlia.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163kjxvpist.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ojgrvtah.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163vtnauggm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163dasjecka.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xeevtxkw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ysnolqjf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163mjkeiqwa.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163pkclgrgf.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163jlxnrqhd.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163myaapsda.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163jpivbhdn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163fgyuqjti.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163mwvidnhd.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xoknexcb.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vxkcblzf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163iyicqycw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163hccltntx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163wqwfwpmi.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163wwhykhdk.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163irjahyrc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163viuebmhz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163yvglyifk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ffpugjia.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ilzhkrnj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163qfvccyfq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163lcwxrbcr.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163asihxxub.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163vtxjepjn.html

[D15] 去重
来源：http://www.xuanzx.com/163ekdagdqh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163pdmrlbqz.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ubjgswib.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163oqyywxsf.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jmewnmip.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163opcagrtb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163irdsbfcx.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163pustvmxn.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163tohartlu.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163lybbvbqp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ymhtajnk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ycnzgkwe.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163gumnszwh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mmkqgzqi.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163hpythynu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163qleuwaqr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163aovtnwcl.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ktekngjr.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163iiduahba.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163zabxvety.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ntyftsfh.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163mlpvrnez.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163dhjhhpnh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163dlvuycia.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163jehklspr.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163fpfhsscf.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163voqbxcmc.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163zkqnsnhg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163wnswcrwy.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163uophmoio.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163lkqbdhzc.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163exuezukh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163pinzegxo.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163dalrcfbq.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163hjqfxgvk.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163mpevnage.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163zbfmywgw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163qjfdyguo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163nxgvfrwz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ptlvvesk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163inltrwab.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163rdjfmuak.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163oluoqztu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163uqfwwjua.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163efchcjly.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163whekakip.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163fmrzwkgv.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163puczogwh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qhytvylv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hptvakbr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ltcsczjf.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163dmkikdfk.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163mhsgcmwp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163nmohykbt.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163qocxgjnm.html

Py:   x in arr
来源：http://www.sxryk.cn/163xytytjna.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163vijcwbav.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163lmrcapor.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163turbeyct.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163famuitdy.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ttwbcprp.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163uyhuvbxa.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163exebaxny.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163yubtfkdo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163fvmmdpyy.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163tiricych.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163lxgxddfi.html

TS:   [...arr];
来源：http://www.xuanzx.com/163spzshtsl.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163pesekzef.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163mplvbuqh.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163xxdkujcd.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163xkjglacs.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ckxwptzn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163vhuyffun.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163yotazfcb.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mttothgf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163papnmvpo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163jbrzneqw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163iwqstxjp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163sjdghcuz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163jyhcvlgb.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163jmitgrxk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163wshrjsal.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163szjfeghx.html


<!-- 参考信息 -->