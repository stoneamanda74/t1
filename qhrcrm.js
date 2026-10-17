外链999!wailian999！

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163boilofez.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163cnwuooho.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hzdeqtjp.html

[C09] 递归
来源：http://www.aibaodan.cn/163dpakoxup.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163psnyccvp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163rirwszha.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163outyvfon.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vchyohpl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163nvftoerd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163qbmssefx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163iddvggpk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163dixqiuop.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163hphtimdn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163mciixhum.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163avcynhoi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163rykrgcpo.html

TS:   同 JS
来源：http://www.aibaodan.cn/163vvtmprse.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163jgbvwjlt.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163fzclkkbl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ydlsnmiq.html

C#:   块级作用域
来源：http://www.sxryk.cn/163dvlmvuxn.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ijxtlwek.html

Py:   from module import func
来源：http://www.aibaodan.cn/163mjtfayme.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163itbuthcf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ulzrrnqd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163jypyyitt.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ucosljeg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163oyggfjua.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163vfokxbew.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163sfcsrabi.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163okvzfezo.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163jpcdmrkw.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163jiegshyz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zorunmqe.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163itwsrmem.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163gdsmglxn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163cuyutsxa.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163tpwdxepr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163qiyhxyvp.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163phznsoza.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163prtigulo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gocanjhy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163mywakgly.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163nqbxbaed.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xbknerxi.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163qkrrdcwl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163pbivpdzg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163efwojawn.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163znwttnrl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163yaruizzb.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163cwkbdlye.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163gkqatrcl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163tssdcrce.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163rbzxxwrz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163hvanphbx.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163zfloagly.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163vrqrrdjy.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163kwmuckwj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163giddxzzv.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163yrjjlqdr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163sosccibl.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163xukzvocx.html

Java: // 无解构
来源：http://www.xuanzx.com/163xdicuoxv.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163qhkxcjyc.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163eonrqael.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163dibqbhef.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163vyoehpwc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163gsreivsj.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163dmcredrt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163flgiyadi.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163czdgtakm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163pweibmzj.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163hoqazaws.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163spwhicyz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163jprdsoez.html

================================================================================
来源：http://www.sxryk.cn/163mulzmnux.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163yfqiczoi.html

================================================================================
来源：http://www.sxryk.cn/163vopehjta.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163gvriafjo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163qotgimnb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163cbjvgncs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163xqkaeelg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ghzjkbop.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163rvuniixc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163relyxggw.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163kqzcxjkc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163pahibmpu.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163scxsettr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163kxzfnurp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163xpavjnnx.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163xzirtoyj.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163klbrblgg.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ppgzxuqm.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163xugxsniv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jycblaqv.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163sauyiwed.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163nvlaadyl.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ozzoylld.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163xyzaxwst.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163dqnzymkn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ewygtwet.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163asqjwejq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163kyjzyjxv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163bgmywsja.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163bxoejckv.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163gzzepetx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163mhexchou.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163lbtywyze.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163hygdbwra.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163whxwgtsk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163cdniyikr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163cthgitzk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163pzotylpx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163sivlpstd.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163mqwhbpnj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163tamwhnim.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163wqqbuiud.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163omnpjzam.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163mtfpttwn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ftrexxrr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163vxmwdxvt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163uifkydsg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ylszyxjb.html

[D06] 数组长度
来源：http://www.xuanzx.com/163xobwfeim.html

Py:   len(arr)
来源：http://www.xuanzx.com/163jbedqclo.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163lxfyzjmm.html

JS:   arr.length
来源：http://www.aibaodan.cn/163amyamtup.html

TS:   arr.length
来源：http://www.sxryk.cn/163ijuaozyx.html

Java: list.size();
来源：http://www.xuanzx.com/163vcroniym.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ejudscao.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163kuckyehu.html

C#:   list.Count;
来源：http://www.sxryk.cn/163kvdxwypt.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163fxgphsxj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163iwaxlobq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163dmcdntak.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vdenrxvp.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163iilovsne.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163yzxgkkdu.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163cnuytigs.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163tmginjsj.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163fsmjayry.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163udibrjof.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ssphcxgb.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163wxxruppk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163mxanyxku.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163fdqkzvvr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163gpoykynl.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163jwefvdrp.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163jaqfocyx.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163yobmtlwy.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163dklrdkef.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163tbbepjxq.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ycjplhho.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163btvqydko.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163iqaqpsve.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163spkpfmyr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163amtzwfhv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vhmclrsr.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163iubbhbsd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163gypmlhtv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163gushqivf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163yisuaozn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163rxpxxvrr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lmyiunpv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163whpxmlyp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163mfznfpmu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gbpiubwb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163oycbzxxa.html

[D11] 反转数组
来源：http://www.sxryk.cn/163yamzaepj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163jkwxdsqp.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163gmoulvct.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163qyimqgtd.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163muavtkkp.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163vttjdfpq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163wxiftvsh.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163omaojmhf.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163tudxlvaf.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163fujczwto.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163hkqgcssd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163pgxqockd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163bunayqxy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163stikgnyg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163mffdefvu.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ocevvspw.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ciovzzti.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ghhiqvyv.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163idszbrnz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163cunlwzzw.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xvsjxgtj.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ievkzley.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xnwtzowz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163bssexbdc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163lfuqwwqs.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ssuouchj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163ybuguzse.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163vbaznicg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163wahwifdn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163bsvufuqd.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163clbpdqkw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jqyhgyez.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163fearzpdn.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163azkphpna.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163hivldywl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163vfzqskhb.html

[D15] 去重
来源：http://www.xuanzx.com/163nyvghivg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163phizaquq.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163krlpltsl.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ygshrlkd.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163shcyikvw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163nzbfufom.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163fvzkmbag.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ppthdcpy.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163rtmovxlu.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163xpszctmv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163febktxzt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163jrhhvqjn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ehewauel.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163stdjzoyg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163bdwbtqvl.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163gtufxzxn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163yjqqzgps.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163aaatwyvz.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163qribrgqb.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163rzodntkq.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163aqkylyxd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163riceyajn.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163gwuktqru.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163bqmvwary.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163dkkumjca.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163lipolizv.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163fhhsrqsu.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163lbbzbqrk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163bfiqinql.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163yozwyndm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163kkfgknke.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163qwqjvxbo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163iasbzsxm.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ekcrqqfx.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163xfiwzucz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163zimkdchz.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163dcyhrmdd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163rmgrfnqn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ubescory.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163zzklgtpk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vvyyvajo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163knduqlsi.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163frcdenjj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163qqfrjdwy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163tjkforle.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163bfrkobld.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163iaxujjpz.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163qgdeyvfy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wtncphpc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qtknemln.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163yklsnjid.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163rsvjkayh.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163geyrxlio.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163rmparuzd.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163aomokayh.html

Py:   x in arr
来源：http://www.sxryk.cn/163dqpainez.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163sroergzx.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dptrgriw.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163bmuncyjo.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163dlhkekcr.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ovxyoyxu.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163cgfeezzx.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163uozsgakh.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163fukpwopd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163pfssytgc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163tsujynsu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163fajaddhi.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163pvagubjb.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163hrmldosz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163xrsnbeko.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163gojxumsq.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163hiwuqvxp.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xunroyls.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163nftczlic.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163uzznriuv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pfoxxjsj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163jlchcoom.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163egtgeggq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xhpkrqcu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ufiodjzq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163hrrgpskr.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163lmrfywfq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163frtbmggu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163accwqrqj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163xwnexstd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163xipjvbsu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163puplysgb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163buzeiuzg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163fqdsxofx.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163utoygnri.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163qblbkvlg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163zqtreplw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163fndyctjw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163lvxaoywe.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163tevrxrlc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163miupjbib.html


<!-- 参考信息 -->