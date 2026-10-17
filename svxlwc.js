外链999!wailian999！

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163sivslfdt.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rjurddjw.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163owajmqan.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163hrbukuga.html

Py:   return a, b
来源：http://www.xuanzx.com/163zbffurdu.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163qwmjscby.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163zovesiyo.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163tpuumicn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163iabasncg.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ebsvwsyp.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163clgoxpme.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163gbjpwure.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163rnbtehno.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163nwctiywj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163eyxnijho.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163xcfkiqey.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163tsiheuhk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163wjuvlmhu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163qxwkpjwu.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163erqhcrop.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163calpgepw.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163jdabazeb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163fipuubcy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163smovucqf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163jdigjohj.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163fnxzrxls.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163lfkfjysn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163kunrpblg.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163jimnhkag.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163wjvzbprj.html

[C08] 闭包
来源：http://www.sxryk.cn/163nquoxpor.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163bwrkjmqm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163lbffcwpb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163pspadvbl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163petthimc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163bprwqmed.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163xgblxghc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163mfsbjfrg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163deahkjvw.html

[C09] 递归
来源：http://www.aibaodan.cn/163tjkdwkob.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163flhuqzbl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163hnzlkvgh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163rfaixzll.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163wrafmtaj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163vgtqwzqh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ekpodxsx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163hafojmos.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163vhspbnci.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163kgxkqytt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163zmmrunlp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163owiiaotg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163kdwkczxg.html

TS:   同 JS
来源：http://www.sxryk.cn/163lwnrgzbd.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163hgvtqftg.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163wwsuelbx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163eajdwktc.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163yuzzwbmf.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163yhdefjwn.html

Py:   from module import func
来源：http://www.sxryk.cn/163udlwownp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163lvpxfyew.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163tpqylbiu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163jfeylnfs.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163rrtjlsin.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163agwrlfuq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163xvqvsogp.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163emymqlwm.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163sjcyxhkl.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163dsuqwnyf.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163acnjbyir.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pgkhesyv.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jocukkxr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163elofkxko.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163uowhvsdt.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163imhorpra.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163qyxqcoeg.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163vdfjsvdu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163nwvhmeyt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163auliadtc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163fuexrwgw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163kgomeckv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ixifviek.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163guwphaxu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163hrhoxdgx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163tlwusizc.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163hihutsnc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163hzwroeeh.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163xnwgjzgc.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163nydbgpox.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163rscdjfne.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ysocnihv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163spneivdu.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163wiyklzpz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163axerwcmz.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163tjvrstnf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163nkurgazk.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ejlksesh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163duizluvd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163jkniojwb.html

Java: // 无解构
来源：http://www.aibaodan.cn/163kdpsfsms.html

Go:   // 无解构
来源：http://www.sxryk.cn/163gjjqsnhn.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163thmzepei.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163tcgplwzv.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163cimhrvbw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ujqewwhz.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163wbpliifx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ocwhitmm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163vekynxtv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163sodxsinm.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163hqodoqej.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163akopiohm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163dibrgppf.html

================================================================================
来源：http://www.sxryk.cn/163utwxxiyh.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163yuzkmbvo.html

================================================================================
来源：http://www.aibaodan.cn/163fzczaaja.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ohzyixhq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ittgrlze.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ypzbintd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163qvhtgwgw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163oqqjkabb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163cmijokqr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163mebwwtlf.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163whtoiutk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163pfubtybs.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163tiixehkc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163lnuoijlx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163wpkrzvht.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163yzfupjpf.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163zatwdbbp.html

Java: list.add(4);
来源：http://www.sxryk.cn/163qchopwgh.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163tuztqdtk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163xekzwynw.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163cbpbfquz.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163komwunes.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163rsldhfbc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163bcqvoptr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163uchjjpgk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163rtlzahvi.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163mxkmmnfi.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163evmrslgb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163pjlvumkz.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163eqrrsavr.html

[D04] 删除元素
来源：http://www.sxryk.cn/163fggpbjqj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163vralzwuo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163mpcgoqdw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163gaqzuvyj.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163vsfdvzyw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163kspjpptn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163qdrmlalt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163tysflqev.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163maojoulb.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163nlvxzpny.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163nkwmuwky.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163xrcsmvsb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pcdjnjjx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163apxjqzbr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163yyidbplv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163dptnpqfi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gbzgcopt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163hburyrzw.html

[D06] 数组长度
来源：http://www.sxryk.cn/163jvpqwpnw.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163bejsigha.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163yowjahzd.html

JS:   arr.length
来源：http://www.xuanzx.com/163mfjmmtgl.html

TS:   arr.length
来源：http://www.sxryk.cn/163tfrekahp.html

Java: list.size();
来源：http://www.sxryk.cn/163anejmbla.html

Go:   len(arr)
来源：http://www.xuanzx.com/163nbygmvys.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163pzihdaoh.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163utwrzhhw.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163zoslcpzm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163cpkfbjcy.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163hhzbyywe.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163qgdolokz.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nwjfjaxr.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163iojhemxu.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163hhzqtutq.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163wmrszcba.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163dbuzpjdh.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163vngtesqm.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163pnzkpyes.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163gbgvcxja.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163szlznbxc.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163fbmcvqzb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163emqwlqpq.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163rpevmqwc.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163nfakwida.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163xvmroxze.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bxlwrvnp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wloxudyi.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163sgxzdlnq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ebiinssj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163aehsforc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163bhixpouf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163dyxqhejc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163gogesqwp.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163tnrxwfbn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163gwmnsrgs.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163xdjmzvql.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163cgnfjxhw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gkdyoohl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163mwqlsqet.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163rsdqxwrw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163pvudhtqd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163aqmhzwzc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163gvvsegts.html

[D11] 反转数组
来源：http://www.xuanzx.com/163zyjolgvi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163jzplxswl.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163rluysljf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163bsjdiegd.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163qydigmrn.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163rifvkfqb.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163pauskefz.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163vtsevxzp.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163iydtsuit.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163cvrgocje.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ccgjglxa.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ascgrvbm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hagligbm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qpayyswm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163hibrotud.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163faovroky.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163wgifwnge.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zgrgztsy.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163mfeqdvka.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163riwukmie.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163jcdhaiow.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163pcnhxpvl.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163fxlgtimb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163zalubckw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163vwgqninu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ivouqvgz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ykpxlcpd.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163xuxnorql.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163tpbrmtup.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163enzhfuyi.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163mtjpkxdw.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hrmgvrcg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163dklvcwuo.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xlyqgaug.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163qptagicl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ynyergti.html

[D15] 去重
来源：http://www.aibaodan.cn/163akzzoquw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163naspnjld.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163pygqwctb.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163barrpukk.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vgezzlvz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ndydevnu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mfqmuhhg.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163asdjfrem.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163itviwhiy.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163zbxrlwgh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163vxrqrwyj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163xbhxigcq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163elzcebpp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163zwrftlxh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163fjttalnq.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163qzczfrqf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ssxnxkzn.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163hgjxzluw.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ypaxucmm.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163hhwguxwp.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163njlzthud.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163grzpohtv.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163gafmwdlk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ljkeltbn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163lcncwzej.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163uicwqogq.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163xmpsjgfw.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163etbioggq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ckvousox.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163vdhysctt.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163jiwtibju.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163wupxhoug.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163qqitkjuo.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163mygbhjls.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163bepducay.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163tgtpqxgk.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ualednnc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163zvyfgfho.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163oktmpibo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163blucbdky.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jwoiqycl.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163nyxeoyzs.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163enfuwjxq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163dgliwdbd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163lwmfzady.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163xmyqbpnl.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163cerhhipk.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163mcahcwsd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bodaunot.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pbssszzh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163byqubjiq.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163yptuzgpw.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163qhupzdrz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ftfjvtmp.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163kbnjohhc.html

Py:   x in arr
来源：http://www.xuanzx.com/163dqekfxuw.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163frxdzovd.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163dohikwrc.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163juleodrr.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163wjtcwixx.html


<!-- 参考信息 -->