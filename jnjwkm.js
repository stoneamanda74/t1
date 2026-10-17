外链999!wailian999！

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163scwawlct.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163oqwouoxe.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163fewcsjgh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163sztnbdil.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163aadlaknl.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163glkubbmo.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jeoykouy.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ngsofhre.html

Py:   return a, b
来源：http://www.xuanzx.com/163uicpyowg.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163hkjycrpu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163lpknchzi.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163juqztpmk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163tyhcjzok.html

Go:   return a, b
来源：http://www.xuanzx.com/163bngumvya.html

Ruby: return a, b
来源：http://www.xuanzx.com/163xgtrdnsf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163vspgyxco.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ifwnhjwi.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ijskvljc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163qdnoiqoe.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163eczzvciq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ntlcoejh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163frvujwvg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163jmryqehm.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163zstgerqs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163iwlibxgq.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163cyowvpmq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ybvgwomm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163jiajekdb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163fbhzncnj.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ybsrgbnb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tiujakgq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ausivzqm.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163oastfobe.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163pmceuuda.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jbsuuopl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163vggdtsqj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163qsltwwjg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vmbryqsr.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163otmgyhry.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163vmrzwxll.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163kavzxodo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163bftbebtk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qoancrgv.html

[C09] 递归
来源：http://www.sxryk.cn/163araumvxo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163xaeuezcb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ejleaims.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163rlscjqel.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dflaoygo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163rufnqvkv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163hyaaeotq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163mmlbttuy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163bzffxigb.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163gyxtojkw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163howfhnps.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163hdfcczvx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163qfvriswt.html

TS:   同 JS
来源：http://www.aibaodan.cn/163wcvbrbcp.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163jslncwwd.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163uocmesof.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163tqlnwsrx.html

C#:   块级作用域
来源：http://www.xuanzx.com/163uhiwmcyj.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163iizgbral.html

Py:   from module import func
来源：http://www.aibaodan.cn/163armiducn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163doxccgmk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163kbdjjuqc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163hethajye.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163lfqrbflz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163fywesjoq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163rndidyci.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163zwkodgta.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163puttwrit.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163tjjrjgas.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163maikvwwv.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163snwneqar.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163nhmjggpu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163yzlzicaz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163yxoddxcd.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163koywbkda.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163vdvggyra.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163vzocpbef.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163havwtset.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ulxtkoqn.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163yhkurcyx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163shoujfll.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bxaobrxu.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163vtfikdpz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163zvttswif.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163guafctlf.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163cpldczpj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163lrubiiij.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163qasivpil.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163mukikyvk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163augmdden.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ruudzien.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163grbwkcjd.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ezfoqeej.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163uysmnhzn.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163pzfygftq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163gyjqbhkd.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163fldllkyq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163jvulanva.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163wbnalkxs.html

Java: // 无解构
来源：http://www.aibaodan.cn/163anekoyce.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163rhghuufj.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163tndnuzgg.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163wnfwpnsj.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163upotynnn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ndekepsu.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163mdbmhvwy.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ikrsgiih.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163exbqcjyy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ysglztmb.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163dzfpimzz.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163rflsshhx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ashyocpp.html

================================================================================
来源：http://www.sxryk.cn/163coepovvp.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163cdttfglz.html

================================================================================
来源：http://www.sxryk.cn/163hxdvppoi.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163oadiiyfp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163fkimowwy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163vormiplx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163barzeozp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163zopsrauq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ebejiust.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163mvjjewal.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163vowswttx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163dpwspclr.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163rdusidfb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163oyfvukmw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163mchxoksu.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163bflpgbjq.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163dvjmcapz.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ixgkcgne.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163lufgpfda.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163cvhkpqsu.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163gjlmrkug.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163idxginst.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163kskfshoo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163fmbwiqpn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ttdefebu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163lmbiyfqc.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163iphkgzko.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ybfiwqgd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163onjbezcv.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163bimrkjze.html

[D04] 删除元素
来源：http://www.xuanzx.com/163bcztlduj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163rcuiekgd.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163dtlfklbf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163aplavbaf.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163vemsygzo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163dlmazvdd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163vzhbxlsm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163oyprsnzq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163dcxngzam.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163vqbqpjlw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rjlcluwk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163bxpbbijk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163bjyhiktl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163fldbmknw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ifdzmdym.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ewjcaivw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qrhzusbz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ebhduprh.html

[D06] 数组长度
来源：http://www.xuanzx.com/163xsbhiere.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ujlctvii.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163gcwshebk.html

JS:   arr.length
来源：http://www.aibaodan.cn/163bpmuutjt.html

TS:   arr.length
来源：http://www.aibaodan.cn/163hohpibzn.html

Java: list.size();
来源：http://www.sxryk.cn/163waftwmdo.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163lkdryqil.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163daaehxjl.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ytbrning.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163nqhiidck.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163gpacbjya.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163utoukhbn.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163iahcrwsd.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ttgflzpx.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163toubitsb.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163hkelbzza.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ugnmkfor.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163yoqojagy.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163isowaflf.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163fzqvtycr.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ackuqqxi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163eaaqoyfi.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163qsvqfdls.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163bbqqcowl.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163rvmgcjuw.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163jbmlurqi.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163enfqyrnx.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163swpjzmam.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rrcwfndv.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163acbxkjrw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163embnkwec.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163yvcrrksq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163gvtthuhs.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163wmodokhq.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163blxomjvg.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xscihbls.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163muslgbzl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163iyztusly.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163pdwthjve.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163serobyyt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163bwbxthrg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163gfzvjpex.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163xpolkimh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163lijuiazb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163rulvrpfj.html

[D11] 反转数组
来源：http://www.sxryk.cn/163rjkfizwu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163kqvlmxah.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163wlnntvue.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163lqrigevd.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163shvjldeo.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163fcqksapi.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163lmjmorvq.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163zdorkmge.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163jhprrawt.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163kvmiifdz.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163trppuwgr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163qgzjvkbk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xamszper.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163wbotsugu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ocnoslzb.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163nhmrvmvi.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163tnyucfrk.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163xzvdvqpx.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163gtssdkkt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163liwqgfgz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163eatbtljd.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ngssecqv.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jiellzfp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163totsjxjo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163votljxry.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ecdafqyn.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163nnxaqkza.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163cnxvxnwf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163boikcdje.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163elgvuinu.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wajyatua.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mqihgbyh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163jznqdxzn.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ayqdaczt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163mzyiamqc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163urkiozaw.html

[D15] 去重
来源：http://www.xuanzx.com/163dzvabhwr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163bmdyrkhk.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163uknglgmu.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163chtrvbvf.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163byjubohb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ccjgupoy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163goesnaxu.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163fsdxobad.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163vfqpgowu.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ssgqlagk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163eglvqfsv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163rdkxhcgi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lwlxrcdx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vszrzyup.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163lyfbbvro.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163tbmzsouf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163plndkybj.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163xlgwrigk.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163orpihqsk.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163bkexkeyw.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163qsoyiosv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163yvcvnmni.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163cypooebd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163hvdsqmsq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163xzlusims.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163oneouevq.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jfshhchk.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163syembaej.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163krfdoptd.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163inezxhfb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163kdfbfvkc.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163dxehagsk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ysvakaqv.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163lypsobhk.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163rztpzmmc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163zekfwouw.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163wficuqbt.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ltrmyqej.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163hjkrcexq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163zhbzdgog.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163symulzhh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163rdxcvbyo.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163gklkakhg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163jkakbkpz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163hjixjtxz.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ozsuquku.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163wroqubbw.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163xpassvif.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163jteotkmg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163wktnupfr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ixpibwui.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163yzvcqyau.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163tdlnqnza.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163scaqlfhr.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163slmluqix.html

Py:   x in arr
来源：http://www.xuanzx.com/163ujqaxxae.html


<!-- 参考信息 -->