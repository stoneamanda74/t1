外链999!wailian999！

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163dmrlbxzg.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163nuibyzbx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163eecgmhwn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163wxzndesq.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163xjsjzqah.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163dmcqncbr.html

[C08] 闭包
来源：http://www.aibaodan.cn/163vyzxcbco.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163jkistiir.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163pypcssbq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jitrrpbm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kxqwfjez.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163qgpuofik.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163msgblnmc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ltzfsufp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dqwfhdpg.html

[C09] 递归
来源：http://www.aibaodan.cn/163lkdozmys.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163xahvvafy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163oopjrozc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tuuucero.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xvhjgzxu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163fflbjala.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163oykknwdi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163eehgoafs.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163vfejcccv.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163qdzemvcl.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163wxmljnss.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163kldfsiaw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163olmzykxt.html

TS:   同 JS
来源：http://www.sxryk.cn/163adfmlzil.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163rtonozkb.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ykqjtcio.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163sypzobzh.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163uimgnifa.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163fhatxbdi.html

Py:   from module import func
来源：http://www.sxryk.cn/163cfwpwssk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163qgfjnkoo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163atojujqx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163hrgzuoin.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163eoghkhxf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163lscptblc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163yrcubnmg.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163heimdwmc.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163yjhrlllw.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163pgrgwpwc.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163asnmjjag.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163nhtjzuvv.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qitztzhs.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163zcgiijvz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163bzzbdxjh.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163lagvsent.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163eeelfanp.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163tmrkltat.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163chuysggc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ctbmdzfd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hutqxcqe.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163exwbqvir.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tqdslqms.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163nmfsndhl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163dotnzwzn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ihakroea.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163moxzrpgt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163takqenlv.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163bmdrjjst.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163nglosrfr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163gnartbyt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163lkmclfgu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163wboskhny.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ysxvrxhb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163mxofnchy.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163hsvxfjju.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163wrfxdpcs.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163zvodakfv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163odomqauh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163mavunkqz.html

Java: // 无解构
来源：http://www.xuanzx.com/163tuafjarq.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ugdcnebb.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163wuyiycyi.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ykrprvig.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ozjzhzgf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163emvbdsbm.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ryjsayhx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163pfrrtfke.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163atednbey.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163znsqjhcq.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163aguakgop.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163wvfkrwwc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163bimxxdxa.html

================================================================================
来源：http://www.xuanzx.com/163qclkczhx.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163lcyjnkiv.html

================================================================================
来源：http://www.xuanzx.com/163yqfdixed.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163teivvifa.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163xcvzhgsk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163pezxyieu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163vugscvfy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163uztwwuxe.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163wihhgupn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ezwqmmre.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163rwrzbqea.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ycuhhtzy.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163xkbjeeuk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ikrinhnm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163vpsavidx.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163vsylnumd.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163cdhqraux.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163qhqnpjyd.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163wdubazux.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163yeeyrlcq.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163nrokevmx.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163rnrhggbr.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163cgaqbfzs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163wbaunbbi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163axpjuwxn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163syxiylgp.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163jaanfegp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163nrofwjgb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163odbfpjja.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163xxzfrnro.html

[D04] 删除元素
来源：http://www.xuanzx.com/163mqcfixrw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163hetijmog.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163znxeolkk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163qzmzdmhs.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163cbkwoofh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163sggmjiaa.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163gvrrewkn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163usaaopbr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163glbxcymx.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163gxkjqxsv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163pjjxqjrm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163xrkwvrli.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163oxwqihjb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163spcyvbua.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163airxlnhy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163qpdtxety.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rsffscwl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163mscvfxuj.html

[D06] 数组长度
来源：http://www.xuanzx.com/163igdxvvco.html

Py:   len(arr)
来源：http://www.sxryk.cn/163vemrsdxn.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163xsggzoth.html

JS:   arr.length
来源：http://www.sxryk.cn/163bdxyhhco.html

TS:   arr.length
来源：http://www.xuanzx.com/163hfoswamq.html

Java: list.size();
来源：http://www.xuanzx.com/163daewtvdm.html

Go:   len(arr)
来源：http://www.sxryk.cn/163jmycpvov.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163uwnqmwrt.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163wffsrput.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163glbizqpa.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163brplyutf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163mvdfejit.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jqmfvtli.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ibqxbild.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163hgdcgsng.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163mcvrcsqg.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ipwgnmqy.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163jrdjkesq.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163aaqibgiu.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163oecfbyiq.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163rlfncibd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163eytkwqws.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163rbiumyxd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163gkecdixh.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163svelhnlz.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163wlrvushn.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163dxwpdffm.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163hhforpga.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tvxzhadd.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163eprvmhmr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ehzahhff.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ylwtvuqv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163teksmzew.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163uvvgkmav.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bwvalmqb.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163iykrttxl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ndctebmj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ankmdnon.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163snzumblg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163korsapks.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kbrgcizr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163vvpajjze.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163acmmfnya.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163wluwfffa.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163gcqhrpdm.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163pffokymi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163jheuvfon.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163xhomobko.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163tngnzcvm.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163tnfnifaa.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163dvshmmhn.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163veyszzeu.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163otcylasv.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163bgijauwo.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163pnihaild.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163egmphyih.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ifmsuokm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mqvlnwmx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163uhsirffs.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163tqaonaks.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163caeulefz.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163itdqlejn.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ldlfttsi.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163bfexjrbm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163onapipni.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163pishshni.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163amadvwta.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jzlcxhcd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163imalskvg.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163fpgvenod.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163zlsiicuo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ubkhumym.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163amtbavcg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163txfowedk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163jhygqfmo.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ymmfmclk.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163blcgqaqw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ylmiweiq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163muamlwkm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163aiimqtwm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163qvhdmshm.html

[D15] 去重
来源：http://www.xuanzx.com/163qzhpfxwv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163tmslwdto.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163kqmgnhwe.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163tkorcjan.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163oybrztke.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163jsxziefe.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ickhfwke.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163dvglpqkd.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163vqnmskmk.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163lbomhduv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163poniwgkw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163iiqnpkxv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ixwszbmk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163lwwcszjm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163wjclldxl.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163sxtzvldg.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163qissmvgx.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163bhlqbtvk.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163laeknchl.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163nvqdaxdr.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163wdvhibvx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163qbzjsinx.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163olacbdfu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163hfjheaib.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163zawynmvd.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163tihyxijv.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163sudwfydy.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163msilnxrp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163awmhqmxu.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163xeomzavc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163krhahhzb.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163pdhdojdy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163eicodpmm.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163wegvgfvr.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163axkvbxai.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163whadtash.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163dwvibcnd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163pqmwasag.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163lgiuhyuc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163kpzwdioo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vymqxdzz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163xvykpjoe.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163nkbmswgf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163tjqxthiv.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163fjmlypex.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163nniicppj.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163iyxqaunm.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163hieelkoy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163zbexwfue.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163oykykzny.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163drmpwyru.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163juxhvkqq.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163inrjjyao.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163jtvdhrpf.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163roymumka.html

Py:   x in arr
来源：http://www.xuanzx.com/163gvlqmotb.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163xscdilqz.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163hmyfgejc.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163gmsvztec.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163bencubfz.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163vforhntm.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ellwdnmj.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163tbqdhqlv.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163lkamhoug.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163nzivlggj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163tfsuqclo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ochcwroc.html

TS:   [...arr];
来源：http://www.xuanzx.com/163bbvlsozy.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163hptwuekn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163yqfzwwxg.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163evregyqy.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163wkwkirqo.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163lpcnpdby.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163dkwbyevf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163swslettc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pozewflw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163vrnlmzky.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163bdgjbnaa.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163kyfwxzgu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163hrvqvaey.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163btplixxx.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163akaltmaj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163uynxdtnl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163svgdxdee.html


<!-- 参考信息 -->