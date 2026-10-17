外链999!wailian999！

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163evlzeugg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163fynblcqq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163lpzuwicv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163svrlshxm.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ymjdvmfl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163wtsudavu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163jlenzxag.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163jurgtxsj.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163quogmrbx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163vpfnbgzt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163elpnbfmc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163pnkljovf.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ogshwsob.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163soiunvgb.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163hlsrbpxv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163pbnplobc.html

C#:   块级作用域
来源：http://www.xuanzx.com/163mxsvxoev.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163grpiyqzx.html

Py:   from module import func
来源：http://www.aibaodan.cn/163zlgxtcrc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163wxvjyrbu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163jjoxnsdn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163rasrjrdx.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ryudsmyr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163rvjbzmwq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163hkpcvwis.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ufshaour.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163peqjkgzi.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163qnamjyck.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163bhunorlu.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gznxqrob.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ulwjckbb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163zaqghfxk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163uhhoomtq.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163thmbpzih.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163smdordkg.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163eudcgnjt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163nroljkrn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163krzudyxj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163cifsnkvy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pyeykzhl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dfsiolvc.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163qaswuglp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163knlyiaup.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163iyabaulk.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163cmegjpvf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ozbvyccl.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163rxdvishw.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163dttwwfwo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ewlbdkvg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163bxoibivy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163bangwasl.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163sdaqvkgu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163tfjytuxv.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163qkkqruyt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163biyjpyyy.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163lpjppkke.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163fajazaez.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163jhspgmtb.html

Java: // 无解构
来源：http://www.xuanzx.com/163liujpoct.html

Go:   // 无解构
来源：http://www.sxryk.cn/163dhxktrpj.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ahoxxwiq.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163iwrxjixy.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163kkgbbsbc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163okhyyyec.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163utfqjxhg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163pzmkpjns.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163vtrqyccp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163gpbzcltl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163bgyyabin.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163gcsdkvsj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163rfhgvriv.html

================================================================================
来源：http://www.xuanzx.com/163prwckkbv.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163puapubuj.html

================================================================================
来源：http://www.xuanzx.com/163lkpindyl.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163soedhnxn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163gupfqqmj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163pcaswynd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163klghhvco.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163fqldnahs.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163rtsifjee.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163eddawztu.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163wbsqhouo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163nvlikryt.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ntsnwtio.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163fxtrhfhe.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163auaerrfg.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163oxugokyh.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163gpgpoxxh.html

Java: list.add(4);
来源：http://www.sxryk.cn/163qcepdxre.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163kauakbnj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163fxhkmjvh.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163pnimmikt.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163yrdfvtjh.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163dgkankbk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163wswrpyei.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163lgkoqngj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163iwihdkla.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163zfyqqbwg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163xwmacrez.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163lvcyyrsb.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163edevdxhf.html

[D04] 删除元素
来源：http://www.sxryk.cn/163mzlgtduj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163scheulid.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163bzztktjy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163bwllhamf.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163rzwkzzla.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163xlxbhxxo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163uzxbhacu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163etlpsqux.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163rhctvgio.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163juyxnleb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163bobiamje.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163xntgwuzg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163pppjdcpm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163jfttvklc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163juqestwk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163oowygjko.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qiimbkze.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ktenxquh.html

[D06] 数组长度
来源：http://www.xuanzx.com/163iioilvhw.html

Py:   len(arr)
来源：http://www.sxryk.cn/163wajillvr.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163tuyuetvj.html

JS:   arr.length
来源：http://www.xuanzx.com/163muqhbqir.html

TS:   arr.length
来源：http://www.aibaodan.cn/163elvqnycr.html

Java: list.size();
来源：http://www.sxryk.cn/163wncqrnex.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163dncwylcz.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163rifpdsvj.html

C#:   list.Count;
来源：http://www.sxryk.cn/163akfyotmn.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163hwkrnuuw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163kzgdlxwx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163pzjgqgsv.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163yskyoyuo.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bkdhxomh.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163obunmaug.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163gngqbkdc.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163fmprhnpq.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163oshtfrry.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163wokuuaph.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163xgsembbu.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163qyptmtfw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163kwbrmhtj.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163yqehnbly.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163saputvfm.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163wqqpcfbd.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163lmixidgl.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163rziykpqw.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163avobzuzw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163djjicfsw.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163boncvcuv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163hwhkwjqs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163wtbrjowc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163mnjcdrqz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163rdhgifpx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163nmjrykip.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ossqcwbr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ouyaqajv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163enheslvn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163dcnaaguo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cbvbardk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163bnimylhh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163oicfnbmq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163upzotqdd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163nhghizne.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163olwvtpij.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163puhhejnl.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ahlzsjcg.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163agoozrvp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163kzwfucbw.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163jlqecrbp.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163vqzeruce.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163eoooldyn.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163yljyprgf.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ioaorokx.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163xerwvwtq.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163kfuuamwx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163pmageoxs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zrnbfnoc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163bfatwcsw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163voeygpzg.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163edggrofn.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163onatbxjn.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zqflokob.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163gklpzjed.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163gdvoydth.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163gdbjkucm.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163mawdjfgy.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ymxqkfgd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163reuxaqgs.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163loymesyh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163jqmvfehe.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163reoybozj.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163evhgbias.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163kkchagaq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163mgwifjix.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jssgwcjc.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163kjauzblz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163rwjltgll.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nahzpjbo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163nhayiker.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163oijdbsqv.html

[D15] 去重
来源：http://www.sxryk.cn/163hpqewzzg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163upbenlry.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163kmilvvbb.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163aygairqp.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163iuzpwinv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163dxpiquzl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163vdkgncvx.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163jqlokxqi.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163obbilxac.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163yknqgktb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163qbelbliz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163kwvdmpks.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ukpwvgxm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163apakkemu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163hsgigcli.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163njeathyy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163woafgvqh.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163njieason.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163piodltzi.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ohhfujwe.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163bgsbraqt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163srzogder.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163qijalqkd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163qpiyoonx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163jarocksb.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163quaizczs.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ndhgaacd.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163lwbyckgj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ouuhmlhl.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163zjpfvjkk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163vawuauwc.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ckmyvkys.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163avnsytqe.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163gxixbtrg.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ckkykohf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163wsnwpigw.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ihaayqnq.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163uawzmkyn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ymuyiumy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ytpdbzof.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xzcvpihq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163cpscgahw.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163hytvsjdt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ksfloofn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163uvcmhirv.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163cppcvdrn.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163mawwcrgw.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163rfalxzkx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ogeiwivz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163rhfpkxld.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163blrfmfak.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ifgynlhe.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163spinvhem.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163sxjlmzmg.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163hyowavgw.html

Py:   x in arr
来源：http://www.xuanzx.com/163qsduiuzp.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ihfificj.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163uerybouz.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163kixaspsb.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163bnjvpbcz.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163jthgddtj.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163btoeanic.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163dgnhdipa.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163orinagem.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ubpkxddj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163pvatlhvs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163xlppctzt.html

TS:   [...arr];
来源：http://www.sxryk.cn/163pjmlljup.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163zgtbnqnx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163tqhgtdhc.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163yxekgfny.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163curiiczx.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163tsqaapto.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163wrjamcuy.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163deissacm.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163khvficlt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163puumyvem.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wuzwzmla.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163seqbilqb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163nxniufdw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163zkmtsxrw.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163jygvvlvl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163nmfniiuk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163yqinrecn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163jqateskn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163qnlbbwfi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163wkwtttgu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163yzxpmsng.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163sghwtaqm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163sqfakyds.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163uvfnpckr.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163uusbyycq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163fgmwtuye.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163heqgfcxk.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vbvhqlxs.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163yxoekivs.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163mwefvnod.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ucqigauq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ncpluplc.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ncpszmca.html


<!-- 参考信息 -->