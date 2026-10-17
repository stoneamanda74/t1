外链999!wailian999！

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163lhqmccel.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163slmkghad.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163osjpiuwp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163olmiwoby.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163qlfjunzc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163tyefdizm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ulxazgal.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163rmidlpfi.html

TS:   同 JS
来源：http://www.sxryk.cn/163apjhwngv.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ckkiimww.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163krdqgufm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163gzpdtwjg.html

C#:   块级作用域
来源：http://www.sxryk.cn/163jlqanrja.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163kiloceir.html

Py:   from module import func
来源：http://www.sxryk.cn/163qvxjqius.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163uzifqqsc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163zgbulwiu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163kwfasexe.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163iaxvyoyd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qccnzxgq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163kiyfuiva.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ebgpaafz.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163gplghzis.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163yihjwiep.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163qjrsbunv.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ixyfhjzt.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163sfoyvhje.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163rdllpyed.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163vfztcehy.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163sejeszme.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163nmaocyes.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ynpcmrpi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163sfgdespc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ovjarvkt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hyfshegt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gymznbcn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sjchbnhr.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163hmrtovbd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163btlqbrrs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163jpyoamug.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163dcfccjvs.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163eyhnblgv.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ebmvqvot.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163vkoqllfk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163uittrrgd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163fdgxzlqn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163rfihgmeq.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163mroqrlcw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163fuqmiego.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ofyqrrtr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163loqjnioj.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163dotrfhsz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163oirmhiaj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163apackuau.html

Java: // 无解构
来源：http://www.sxryk.cn/163ymibgabc.html

Go:   // 无解构
来源：http://www.xuanzx.com/163xcpjpaxw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163lpetkkkk.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163zlwatmet.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ofxnwgnn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163zgcuimld.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163hczejwwb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163cjacwsyn.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163hpdpjtwd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163scsctinz.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163nshvfnfy.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ceeajzty.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163qmkicqmb.html

================================================================================
来源：http://www.aibaodan.cn/163spewoayf.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163bnasmhyn.html

================================================================================
来源：http://www.sxryk.cn/163tffyhpvf.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163fewxrytj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163towidiyu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ypyeciqr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163uuwnoiqg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163agsjjrti.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163dtcsdovg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163herdlfus.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ezpjuleo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163zfezwdjp.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ibdpndny.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163bsiuaolu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163efnqnvpy.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163aogvgrbj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163twwmrprz.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wmlpgwci.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163jvlwucht.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163urzzvmtd.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163palzluck.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163zakvmfde.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163szcnlitq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163tcemabjq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ikagzkyq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ndmokutb.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163accetzza.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163vfgltrmg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163oilhkerh.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kphkzpbx.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ncvdvfhd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163rgqelewb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163hrioxppz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163hkinwhnm.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163bhremhlb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163hgfznzmv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163wolayvkq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163npzvvqig.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ddqjills.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163vknseciv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jerejtcf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163zxyoyywo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163okonojgu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163gwmqjiko.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163yukyaqfw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163xkvzhurp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gmcuumml.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163lruzyzop.html

[D06] 数组长度
来源：http://www.sxryk.cn/163kcuatjmx.html

Py:   len(arr)
来源：http://www.xuanzx.com/163iketciyv.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163hctasxap.html

JS:   arr.length
来源：http://www.sxryk.cn/163bukbcrcc.html

TS:   arr.length
来源：http://www.xuanzx.com/163wllrnpfj.html

Java: list.size();
来源：http://www.sxryk.cn/163lrsgexor.html

Go:   len(arr)
来源：http://www.sxryk.cn/163kgfkowjl.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ibhnmict.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163syufeipo.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163okfcoeqy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163lbaalryo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163kgczguyd.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lodigkbo.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ptetcntl.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163oiaeyhfa.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163yckupkjx.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163xagnixvb.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ansvkfnw.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163dofcewea.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ckjavnyv.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163aebjuzhr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163aqrexmqz.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163cqpniapq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163szncyoxh.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163awrsbmsf.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163uvwncdil.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163gkcqbouu.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163inqhnuxi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hrxjhhrv.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163yeqkejxa.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163heccdfil.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163lsseadxe.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163lqprqftv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163yumclroj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ziwtdcfa.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163bfkzpeus.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163mvbzvtfr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163iowwxqaf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kbgreulk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163opqzvcyp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163rawfagep.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163knxaecxy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163jygduogr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163fstleyto.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ifjeegwn.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163lvtmfism.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163fufeubmy.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ssiyktjz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163rslthpyj.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163dgagxgim.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163esykefiv.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163utxpeymx.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163bluwhaux.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ldxfvyyv.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163fkvzrdcw.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ywqvmyck.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rwhpvcly.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163modxvnfs.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xzkhnfmz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163zrdrtjpb.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163iaujsxaf.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ndofdxyp.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163slftcwau.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163oulcadgo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163acczbbkl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163pfdffsts.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163niaugzab.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mmxmyylu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163hmsvxdxf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163pbpaazag.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163fjivgxfl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163zgxgwruz.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163kcplkved.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163igrgktmt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ujzlovzh.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dvotrplw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vxvmnjnq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163txslbfpq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dcmsocpl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163kzjpbvdp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ziabuzwu.html

[D15] 去重
来源：http://www.xuanzx.com/163quaffuti.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163stjwybkp.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163wwglxbxh.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163nikprcpj.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163hraawful.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ftnmhvee.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163dbyuubdu.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163kbijcwkb.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ddptnezj.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163bllhyrfu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163xhjdmqus.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163rbesbfye.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163dpwbronl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hamzurcc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163dpjahnhd.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163kpmlucou.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163cdkixstq.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163vyrhgmrl.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163hvgjdkbp.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163onpapapy.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163jxfxgwni.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163yyhadxxj.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163iufckgve.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163zhwzzcop.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ahflvxvv.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163epgjcihr.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163zwadixyf.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163whvtevoj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jityootb.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163jbhrgplz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163qjjfcakv.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163txerkzhg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163eybcflbm.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163xcgnaxri.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163osuuprof.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ohnjpexp.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163stwpigbn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163uzffliff.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163nlthzfva.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163fwivhhid.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163whqqajgw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163tzbarfkl.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163dtilbjyu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163pgebxoil.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163qlvkdjjg.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163hxdhtags.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163gtyjuwwm.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ypndbbcd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rvcunoib.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163shhtcnhe.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163iswjlecp.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163xlplnmfa.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163twzjnngf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163iwhmdbsb.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163acryggro.html

Py:   x in arr
来源：http://www.aibaodan.cn/163bogdtdcd.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ijgmylit.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163jsfhvlmd.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163aoaxfhaw.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163cdlqjdtv.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163juxwamyl.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163iujdkqei.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163xfltgrst.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163euoqecru.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163awtkiqgp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163rnnvtccr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ncpqckfp.html

TS:   [...arr];
来源：http://www.sxryk.cn/163qugsjdzn.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163nzcwysav.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163fkpaxexb.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163kvthmbpx.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163fopfumjo.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163nzrigyrn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163hymkqarg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163twbkokuq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163qbezimno.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qwwgyrgn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ahrazpsq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nqosxoui.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163hdvgxprr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163khqchrsu.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163jjglvmkr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163kyulyyaa.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ewcmwzga.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163qgcxaabd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163nephnujk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163sxmzshtc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163etaditgs.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163wwdwmzih.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163abszfsda.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163zwhzysng.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163aoqxilii.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163epypxixb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163kjwzymie.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163hrdajzex.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163lxkvtewe.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163wmjkyouw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163pjaqynjl.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163zlogohhm.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163hsfwgmib.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163zakkoxgc.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163mapzdjkc.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163wrbyhybe.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163hwxjqpqi.html


<!-- 参考信息 -->