外链999!wailian999！

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ltxoqnbj.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ccnvpchr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qrflmodg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ilkklrrj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163vhvuufws.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163dxtnnrpc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163egzznxsu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163jpclijwx.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ugzwthuq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163budimijg.html

[C08] 闭包
来源：http://www.xuanzx.com/163qrzadstb.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163nndioquw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ldjwgnlk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cuhujpgx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163csplyaoa.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163trratodh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163doknkriw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163dgnftpco.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zrkyrdai.html

[C09] 递归
来源：http://www.xuanzx.com/163fojhktjw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ktacceer.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ztopntab.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wamzkzlm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kwbiscov.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163dsoreuvy.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163swiqmuqe.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163gvlggdwq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163vujrwtjg.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cbhiapxc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163bgphzfsz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163xzithwrm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163uixlhmxf.html

TS:   同 JS
来源：http://www.xuanzx.com/163dcaltizi.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163piasxtqn.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163aemyfmrc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163plmdwshp.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163wzhfajlj.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163fpempbwf.html

Py:   from module import func
来源：http://www.sxryk.cn/163egbwaakt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163hdafnajf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163nysmtrbv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163jdpirjsu.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163cdofieqq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163mgsugvpw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163qsjjayrv.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163scbquqcn.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163iwhwqgzx.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163bquzfmax.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163bqvkmzgr.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163flxusvhp.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vyzfkqyh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163faghsvey.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ldkvwtga.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163pblsifjp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163yjezkquk.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163bsccdscf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mipwgrwd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163abscxnlo.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163zwwflztu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wopsedao.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163giiqfdhp.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163rvopksmc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163dhnrebgl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163jianqyxx.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ewfkxjhs.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163czuybwzs.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163omzuwysb.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163qevzymmr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163eresdiet.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163vrqlldfk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163hvldenha.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163lmwmenln.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163fmhpisvr.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163jauvjslc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163jrcgsjiz.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163gmtkwzts.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163cmmhtffs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163dcithryl.html

Java: // 无解构
来源：http://www.aibaodan.cn/163kvrlimkw.html

Go:   // 无解构
来源：http://www.xuanzx.com/163hejegkji.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163iubziszg.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163nwzqmvts.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163xdtayepd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163pknmsebl.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163bpcniuxs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163blkdgpmi.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163qxkexxvq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163xjzanjsk.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163wbsukqty.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163zymgllou.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163rufkqipe.html

================================================================================
来源：http://www.xuanzx.com/163mbyjbnss.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163isxybeot.html

================================================================================
来源：http://www.xuanzx.com/163jgjsqkrp.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163wyqvlcte.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163pcuodhuu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163qllidlcr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163mkabnnev.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163jftjspbn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163zwancubs.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163tksuulfa.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163iywloakn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ucbupctm.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163secgdlba.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163pgmsmhty.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163mrcdxdvy.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163hongpzrw.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163guvgvydy.html

Java: list.add(4);
来源：http://www.xuanzx.com/163npwzmhen.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163dagkceix.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ymychjgb.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163mnnqmxbq.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163rfdxfvst.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163gfqiazzy.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163xnwimwze.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163pthayvof.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163cgpohilx.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163hoxasfml.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163tymczplw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163rdhrcifh.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163udnqcadb.html

[D04] 删除元素
来源：http://www.sxryk.cn/163nidajwuc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163judbhdxw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163xxhauwhb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163gfoxivru.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163takimgrl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ojwyuyoj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163erwsjrbk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163enmdnjwt.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163noaehaot.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163nhzkwbkz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kaopzydu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163rnzwktno.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163kxfgopka.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ryasvtvf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163fkdjlxfj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ieviutuv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jjnfrehq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163sqbsietj.html

[D06] 数组长度
来源：http://www.sxryk.cn/163acaiyqfl.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ontvlfds.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163blvushkv.html

JS:   arr.length
来源：http://www.sxryk.cn/163ycyigupe.html

TS:   arr.length
来源：http://www.xuanzx.com/163dbixtryt.html

Java: list.size();
来源：http://www.xuanzx.com/163okxyctnu.html

Go:   len(arr)
来源：http://www.sxryk.cn/163qnpinwqk.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163btiqjpbr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163tvmtgawm.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163nqbgvzps.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163jekjoskc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163lshzsthu.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163unbfazgz.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hylwpvqb.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163enegozpi.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163mdiyhoif.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163wclhzyyk.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163qmgnbhdo.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163oiqvwqns.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ngnalwsq.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163gxbzecpo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163mdydudlt.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163eweakhqt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163jhfelhxx.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163tebaasri.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163kdzjpmop.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163hlypaqnd.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ljbvrjhi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ljkvvgjz.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ohvimvje.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163rvgkxiju.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163uuhwhyev.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163fruhjqhr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ugjcpylb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163nkeczoft.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163tkwctjrk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ukmqgcxn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163syzapvip.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163qvrlegap.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lbjpilwt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fdlamjfg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163cqjbedum.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163xfvejolu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163dqdtrxkz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163fpezjief.html

[D11] 反转数组
来源：http://www.xuanzx.com/163zmgukjqj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163cljdjzie.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163aqbkxzpy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163jqdgleqr.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163gnvjcuoa.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163rzenztab.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ispnxnro.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163simtugwx.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163tnymazbx.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ltblsjmk.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163xatklvzn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163euseeejb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163mlknbrjz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163djyrdqto.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163nmlzqrme.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163vpmeytqh.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163oziopuuc.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163emkmhifw.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163tfyzosqh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163eqyiiwri.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163rghuxcxr.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163keqzrueo.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163crsiruju.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163lxfospuf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163nqgfvaov.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163uyrfjccw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163vtdfclgl.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163hszpzatx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163jdiuidgp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163upsfucqw.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163lnaepqwl.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163udbkuijd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163inmjtxyp.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qurcmqig.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163lpxlohzv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ygwzhwbh.html

[D15] 去重
来源：http://www.xuanzx.com/163uarrekos.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gvxhaqsw.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163juopmfpn.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zobhoafw.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nwjenxwq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163htwjunbu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163awhxvfun.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163qsyrisay.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163lzdmmwqp.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163qiajqlmw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163tsthnxeb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ljwcwbgf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tborizgv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163sibqnwpk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163wbotzwvl.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163lxrkopmw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163kuadjfcm.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163rcklvcab.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163erxylhwl.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163kttesclg.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163uqeejnpl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163qvmndjoo.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163hvltxtix.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ndshulzy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163bmzduexr.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163wtrsdddj.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gbydwbsw.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163bjyrlsfj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163gcjfvfrv.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163vqrkiagg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163bxqmvmck.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163seclnqgg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163achdcmrz.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163vcgenmqr.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163gfpxlnbw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163iprbvptb.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163rlvdkfkv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163hdxlbyza.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163wdntctyk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ugrpzuni.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163esisiixu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ihnksjis.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163mldyvfue.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163akugzlqc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163sbyptahc.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ovzhyjqz.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163rrdyuwkm.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163pyylssjq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163jdzxtnig.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fnbswnyk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ezsrwzrt.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163xfsdvxsi.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163tgjvqfim.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163blzasmqf.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163bjkzosny.html

Py:   x in arr
来源：http://www.xuanzx.com/163dxybsxgr.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163imyrvntc.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ychwrdfv.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163mdhdyexz.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163rqpnjftg.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163hfzdbkfd.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163bzpmshtz.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163omchtgut.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163uwxxtplm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163xwzpjfmw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163mazxegyg.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ocfqnnvt.html

TS:   [...arr];
来源：http://www.sxryk.cn/163dpnkvxuq.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163tehjefhx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163cfhtchho.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163qjqetmhc.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163cjmbmofc.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163inawkkiv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163llpzdprh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163dcxyyprn.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kdlyvhka.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ykcvdnoh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163mdgesork.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163grylqxca.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163mdipvevr.html


<!-- 参考信息 -->