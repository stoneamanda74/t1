外链999!wailian999！

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163svtcdxhh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163argfajgr.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163dzqdndpm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163bbkbblgw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163bwyjxict.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163enlxgpsd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ybmprzom.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163kqkopruw.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163lotmwrxv.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fybxrsse.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mvvpmytb.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jfwxijsh.html

Py:   return a, b
来源：http://www.aibaodan.cn/163eplinypw.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ihcttrbl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163aivxotrc.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ndufloee.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ispkkhzv.html

Go:   return a, b
来源：http://www.sxryk.cn/163skmouowr.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163dcpgqfsq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163kycyvyxb.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163mdiakqfh.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163gunpoeeg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jypjfhjc.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163epfpprlz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163bmrugapm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163pxfqznga.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163kjshswok.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163tpeozikm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163wtwhsvac.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163tktbgare.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163nisqwhjk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163tfqoqzdp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163dkzehbfk.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163sdgmfqtr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163jnivzjkz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163zssbrlah.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qllelhvc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163kqmoewzz.html

[C08] 闭包
来源：http://www.xuanzx.com/163pyeotxmw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163nhlnqvya.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163nzzjkdyy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wofqplfc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163uktsrhuw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163qeexxrin.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163nfeionkp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163iuqepzqk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wbmjwfna.html

[C09] 递归
来源：http://www.xuanzx.com/163oxfuplcx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163inuumbno.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163haqpwhui.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163laydcwto.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mpdhwmvs.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163nypfzqzb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163etjjzsuf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163rfzrbmar.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163dydrnuig.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163xrkeemit.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163xomwcdzm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163qvxtdish.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163seuybuni.html

TS:   同 JS
来源：http://www.sxryk.cn/163haegplbd.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ueuudfit.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163tjumfnwd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163zqszxxsr.html

C#:   块级作用域
来源：http://www.sxryk.cn/163wzvsyiyy.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163gyrkbxhk.html

Py:   from module import func
来源：http://www.aibaodan.cn/163sclpijfu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163xdfsjokh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163dviqohmc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163vamdeofw.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163kyglzdze.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163eaumsjyr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163zszhtdsb.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163drtsgrnx.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ecoflslv.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ncmpmdov.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163buvmegff.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wmyuvngw.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vqeyxsug.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163pmvjrqcn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163whjykfjt.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163snrercrh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163zvpkgpsw.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163uvvxwyrq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163aaurjtmm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wjilmdba.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163vgibhzic.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163oynxqotf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ipwifuan.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163rjomoxnb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163erglkkey.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163fiujcfvl.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163zahkclsb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163aeigyirt.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163arldgwkq.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163plbinrdi.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163cbduxhzz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163wlbascoo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ydqmyqms.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163nfqjfkxz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163webjfaes.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163wuerutbe.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163rvkqdmrv.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163puhbdomc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hoeigxdz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163nwvywcbg.html

Java: // 无解构
来源：http://www.xuanzx.com/163lcdedksf.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ehaddymi.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163gldvewiq.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163adojelmv.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163waahrlzh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163kpejiccz.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163elprvpli.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163hqnplsvx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163jybxczjb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163coeojvzb.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163hlfwgmgr.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163pxaqiwcj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163mhbmsfsh.html

================================================================================
来源：http://www.sxryk.cn/163tihbxjhf.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163foatizyr.html

================================================================================
来源：http://www.aibaodan.cn/163plewofca.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ztuxdtxc.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163bjifppoz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163trkkkicd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ddephumf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ccolssad.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163whydqiih.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163stlwwuoa.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163odjoqexp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163eswxrkkn.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163yynyqmjh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163nfipqdmd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163kimvpdgv.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163sjzzcmko.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163plbumabc.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163kwxdveok.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163fvnnbpdf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163uqgaqhlp.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163fllbzmyt.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163mjuodktc.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163skpyymid.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163sppbrxmb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163tkfsqdmr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163kiqvevsk.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163qehfdrjp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163uwiaqwip.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jexldqax.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163qnlybkrj.html

[D04] 删除元素
来源：http://www.sxryk.cn/163xtgtzctm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163tnlztwia.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163tcwjsoly.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ukyjhwgj.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ktcfcsop.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ljsekoea.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163wphsnntd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ssjyphpr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163xapurars.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163fohrkrfp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163hspsdkbe.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163tllcanvq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163zoytohgd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163bnmkowpq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163xfhrrcrz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163yebagczb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163puygmthe.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163hfjdepdm.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163tlkuaifu.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163cpolddiu.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163zzqckrbb.html

JS:   arr.length
来源：http://www.sxryk.cn/163rhjjxdds.html

TS:   arr.length
来源：http://www.aibaodan.cn/163qgxazyzp.html

Java: list.size();
来源：http://www.xuanzx.com/163deehzdvw.html

Go:   len(arr)
来源：http://www.sxryk.cn/163aezpoqzo.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163qszljbhf.html

C#:   list.Count;
来源：http://www.xuanzx.com/163zakbgilr.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163yterfwhn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163drjteyua.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163hyaxfena.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dvncvdtu.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ngdaboov.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ldzttrxa.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163rleyedir.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ojbvpihp.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ziyajnti.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163coxpbxps.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163gcdbokia.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163zawgmyrg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163dpmkqyym.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163cshiqqlv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163vykfqald.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ebqgzdam.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163zyrhfkku.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163yqxwzolc.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163rmdvdydx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163tdamjdna.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163bikhslqj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163qokrpkox.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163xdsjdlyz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ijxldwba.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163zehxxfvy.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163tpnfsgth.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163pezkxojv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163scdtkjdu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163idfvxpbs.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163roozxbda.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ajxwywqv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jgbumnqy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163kuqtvnjr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163uhizyplb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163hkopfwup.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163uijrvpbw.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ebajqbdv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ugrierff.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163pvxnvpiy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163dbvrvplm.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ddmjffgn.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163arllyoox.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163msbycdzj.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163pddshhxw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163zumjjbtv.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163lbwoacpy.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163duhjmozh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163dvxjjjsf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wcryxrio.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wgwzmpfc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163gbcohdjq.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163suigelkt.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163emahizwi.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163byeduobr.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163xzrrzvbn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163xicuqfau.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ydsnnhuy.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163tqmsjbfr.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ghlndrbg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163forvqanv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163zxxtcgnj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163quxgmwmu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163pndpvuye.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163rlopzbtc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163cimdxhwc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163bjqtovrb.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vminzuqx.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163fsmlwiwp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ymhcehjq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163sucyztbn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163qdfjzbnr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163psuwqyxp.html

[D15] 去重
来源：http://www.xuanzx.com/163inptidao.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163gzfxborm.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163yurrwbrh.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rjlgfibr.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mgynonwq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163zcjipfom.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163prqxfceh.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163uthajtgs.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163biauhrij.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163hjxnvait.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163njtgxlqi.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163dgyzjcdu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jkdqhzjz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jlplzusy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163bfgmibhr.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163dhlouaag.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163kyqnnefn.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163khnllksy.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ulvkmphl.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163veiqffuq.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ekhyhpyd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163rmolipns.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163awkiqslj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163fowxltsd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163hsmzyjrc.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163iflwmxjz.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163fcafiwmw.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163hynvyoyb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163tpmytnsm.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163zsiwqpew.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163kdwzpxab.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163mhocogyb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ewlbvbqi.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163usslvgwb.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163fckjomqt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163xvgdnvrm.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163wedgdgit.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163yaujupcp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163hvtxcswk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163prgdirab.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rqvlhspk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163sqscbxin.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163geguxftq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163sicxveaw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163jclmpekc.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163zeuthbwn.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163wxaibwoc.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163qkdeqfje.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gdydshal.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qoikuqhl.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163hnavhdxk.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163zpcouepy.html


<!-- 参考信息 -->