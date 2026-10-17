外链999!wailian999！

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163fthwuzcr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163clmhkymd.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163iiwbrrrh.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163skngyurx.html

Py:   return a, b
来源：http://www.xuanzx.com/163imoygjwb.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163sqstbait.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163eszslyht.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163cwigwowd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163tgiyagei.html

Go:   return a, b
来源：http://www.aibaodan.cn/163gayxuxet.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163cdhrwwec.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ywyibbuw.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163xzytqeiw.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163wrrlhpaa.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163zmmwsxwb.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163zkjulzyv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163pppzymbl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ircemhrv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ehkfgvux.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163dvrvoxfg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163heyiuxin.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163hloirinc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ofaypnzc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163wysmfgis.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163bbckfyca.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163zctrxexf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163huznurqv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163iajatvra.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163gkhiehhr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163uvfyteyb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163qgkjphvw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163quxzsnoo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163dqyupilj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qiyyblwg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zugikstf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163riinkxxx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163uimiszlq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163apvayryv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ukruselc.html

[C09] 递归
来源：http://www.sxryk.cn/163gsdkjhhz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163tvnnklmr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163rytedoqt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qbxnxuse.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ieguplyu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163xiychork.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163xspljpsw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163cytscwxv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163udbsoszm.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163imcamtfy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163djkkxhei.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163whwcsyya.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163zfvzqbuh.html

TS:   同 JS
来源：http://www.aibaodan.cn/163knvvwrxt.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163daeypmvw.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163vkgrdclb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163siaowllp.html

C#:   块级作用域
来源：http://www.xuanzx.com/163upfxzyda.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163anjujxsb.html

Py:   from module import func
来源：http://www.sxryk.cn/163qkjphfkx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163eldmnysf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ydwqyfcj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163rzxekzme.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163pbycxhpa.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163kygnojgv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163oosnmthb.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163mqexrybr.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163cugaghnf.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163xexoegdv.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ehyrvshd.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163cqbijysd.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zuraiuha.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163syyuzovl.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163yvlgdmxl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163mhiczdis.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163mszwlmoh.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163uivgflyk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163trtysvii.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ztxulcmt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163lzzpgblz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163vvujdezg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qphtqfak.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163snfemujb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163bgewakru.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ipwvvwwu.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163weymfngy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163hwnniywj.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163tcfvctuc.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163uixvtgfn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163msaggeoz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163dvsapxpx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163fanysaai.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163fogweqox.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163prbtssyr.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163dmucjjqi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163xkcfwwdp.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163igqtybye.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163xonydxbh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163pbfbuyhk.html

Java: // 无解构
来源：http://www.xuanzx.com/163ygqrlbxp.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163brdkmrvs.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163pglsopad.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163fuvwvgir.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163bfefjtyc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163efkmeqje.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163zfkxxkjj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163evccojhp.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163puwlfevu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ystefwzp.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163bpkzuvwf.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163dsqhrsdx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163fympazde.html

================================================================================
来源：http://www.sxryk.cn/163yhomgqie.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163cdetfdwg.html

================================================================================
来源：http://www.xuanzx.com/163oxpxogwj.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163qbuehexd.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163vvorqapx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163autsthuh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163jvwhdfhb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163kzjwhbej.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163oyolsarq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163wmlxbreh.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163awrnfbuu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163uolkiclw.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163firdjfju.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163xbjybzog.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163pojvswxb.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163nmvkdwdq.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163mdvslfng.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163gbgbebtf.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163nzequurf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163wdxhphln.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163fxkbcngy.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163yrjbuggm.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163aiatnwvv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163eulxipgj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163dwbtjaph.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163cttulzwd.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ivsmkjlw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163kavgprhf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163qlvywqdn.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163tzibbkle.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163tmbkusas.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ixzhqiln.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163uibvsaxn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163lljurvvl.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163pyuvlujm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163krqydupe.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163orswgpsl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ysbvvkwr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163rnebvney.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ssnywpnb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zdglqizb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163xpbtrook.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163dlpzqrnh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163vnymyqzb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163swxncksx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163lqigiawb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ucfhbhwj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163mamxecmh.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163uaoguumd.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ylidohqw.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ttsimlmj.html

JS:   arr.length
来源：http://www.xuanzx.com/163wrtpihnj.html

TS:   arr.length
来源：http://www.sxryk.cn/163scowpwyh.html

Java: list.size();
来源：http://www.aibaodan.cn/163bwkgvxkw.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ethelggb.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163bukqvogk.html

C#:   list.Count;
来源：http://www.sxryk.cn/163nfvhcqnd.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163biuombli.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163tdhasrjw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163mwyomjtz.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bontkigv.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nhqywvuw.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ekkswcve.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163mudplsne.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163fezjtyac.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163iznwfzoa.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163navyjgbr.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163uibwxmyr.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ndnaajqp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163vtdihqea.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163hoicsxzd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163kyhbdwmi.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163klseevzg.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163yvszingk.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jzvnbpcf.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ptlcffla.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fbulllyd.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163cwkyqnwf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163htboqoly.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ruwipjxp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163jzhxplqc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163mzcxwkdu.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163eeooobqn.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163vujiffkj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163hjhgqojm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163auebcbdi.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ratkjmvp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mtdkclra.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163uiqmcthu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163nfoaicua.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ectckkft.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163grrcskrf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163sgyfvnak.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163wgvborfx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163btmzpkrs.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163nfvgyvsa.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163pvettogo.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163qeqyeknq.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163eanoodyn.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ssdvshoa.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163hzddgncf.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163fzhzvdyd.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163vcuchkil.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163auobvbiv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163kpsrqbjz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163yuijstuh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163iqlcpotz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163gwerifgh.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163lahqsdal.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ijykfapu.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163iqeamhxb.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163vsseibgr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ltbshsvs.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163wptnzgej.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163tayiewhb.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163inhzpjtj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163skmnsuao.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163xxkvzgbu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163gymeycoe.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163bgyikwkn.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163aiaixquc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163cssysoba.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163cosfhbyt.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ltqrgohs.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163hrlzaylm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163vyrgtdey.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163icaahbvn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163pkuqudrg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163icjqvspx.html

[D15] 去重
来源：http://www.sxryk.cn/163urvbtnbh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163hjdrchxx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163jshrhqkf.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163twkupzlr.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163mivqvoya.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163pzimobfv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163fgmizrot.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163lcfhldbl.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163oepefdcj.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ntdlkxbt.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163rkqdvoxx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163vgcjikmj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163npqvxrce.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163sdmfaeoc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ayytulyy.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163hlbknzfs.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163rszsmihp.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163vuvkolwb.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163kqtunqsv.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163uyhcgoup.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163xljnndrv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163vwusdnrk.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163yibkkxlz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163gnybzwkt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163hjfdwfhn.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ctxfmhkk.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163npweyvkn.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163nzzskvyv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163gdfjupky.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163kiiyavkv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163rurgorgr.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163puftkijo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163tekztqew.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163kiwtnswy.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163vezzhvvz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163jnpnrwma.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qpclwsbk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163itmcriwz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163jeejknyx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163xgzqksct.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163fpureluh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163tiqcrxhp.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163bputwyhr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163bcpxzzzp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163llbskbiv.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ueeixvli.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163jiuvjvqe.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163eqnirjec.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163yqkneuek.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163xqtctcsq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163wbomdwpm.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163lanqfqsz.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163dedgtfbt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163fxxzrvpo.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163tfhrorgf.html

Py:   x in arr
来源：http://www.aibaodan.cn/163xpkuqeya.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163dwvunoqz.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163gmhyjlto.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163azjgrofl.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163nafqwoxe.html


<!-- 参考信息 -->