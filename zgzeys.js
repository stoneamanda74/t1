外链999!wailian999！

[C10] 变量作用域
来源：http://www.aibaodan.cn/163lbqgtvfv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163yewmfhgl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163bcrragfg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163gwqeeafv.html

TS:   同 JS
来源：http://www.aibaodan.cn/163spegmghc.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163btkkpkpy.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163srxkonam.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163xarusvio.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163pryyahbs.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163dmjmeqhc.html

Py:   from module import func
来源：http://www.sxryk.cn/163iifcpjgh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163vqfuxrod.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163ydvrnaun.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163iafhyzpw.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163xljltvlk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163leptcxxr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163aqifiujm.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163qdqrhdpm.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163oiccysbm.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163uqgcnxcb.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163utrzsioi.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163czotanqw.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163sunmciyh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163oprhxcof.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ucmhkutu.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163gkoyuudd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163dfpmtnwz.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163umkfcpox.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163aeujwfgu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163thgiwbfs.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163suhvttjt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163eymtpgkw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vdlpmyvp.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163rrrrktgg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163hzdjdsuz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163brizsbrr.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163kjolieck.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163fxlbklqq.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163pedijwsn.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163sxfizuii.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ybukpnbk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163mjrxrgfo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163gnmsdrqf.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163dodwscoy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163vmmhjiwo.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163pklloxek.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163tzzoqbxx.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163vrfkalia.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ezxmvrje.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163pxqgzneb.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ificmppn.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ntgmodkn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ilsejpgb.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163fpyxydee.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163dvpxoqgy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163gcziiyvs.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163qncvhcks.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163aasddrjh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163njlkyywt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163qndobvtb.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xkrlhqka.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163zjodxdur.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ucdbtgff.html

================================================================================
来源：http://www.aibaodan.cn/163jsoylasi.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163dryuiroi.html

================================================================================
来源：http://www.xuanzx.com/163tngozyll.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163cqwshqlp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163rdsjrpuu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163cuskxxwb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163hawnumep.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163hgkxscpc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163strytzsb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163qsadpccd.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163gtqlkbip.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163vthesosj.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163qsrnedfm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163zastdqth.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163xjahjyrg.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163avtzclwc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163iosewhnm.html

Java: list.add(4);
来源：http://www.sxryk.cn/163bbmqujhm.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163zeptmosq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163lcwaksic.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163xmpqvsco.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163hozcnxcg.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163cfbborxb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ewabfrjj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163jxzjcrqx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163voeezqbv.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163wucruyqq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163yxftdzxb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163oahujirq.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ztxuvgxf.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163zobmkpvj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163twzomvxq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163dxmihrhc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163jxwsizhq.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163fhycbunb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163hlcdugwu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163slferiai.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163nnjwvmzo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163inuebige.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163hfmzrrow.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jhtksfgx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163nznsrint.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ltcwavmy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163uzekysjx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163iezkyrvi.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163isrmdlue.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wkozxnfw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163byybgmmw.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163lwpyieut.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ietygvkx.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ltwjprub.html

JS:   arr.length
来源：http://www.xuanzx.com/163bkfrgvcy.html

TS:   arr.length
来源：http://www.aibaodan.cn/163rvdnecho.html

Java: list.size();
来源：http://www.xuanzx.com/163jlkhebuf.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163nsufcvks.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163hrkudkdk.html

C#:   list.Count;
来源：http://www.xuanzx.com/163iyuvpufh.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163vaakytrg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163zylryxsp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163onuvczdg.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163yfkadezd.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163tppejiei.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ismvslnp.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163pztlzpnp.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ujvtdmni.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163iqfhndkk.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163yaaegkih.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163pydmishi.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163mevybadt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163lgxygebc.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163kxiqldzr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163hlrgnxom.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ptdzhilh.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163zfxrtdmb.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163cnjgdrsf.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163zgvxrvuj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bfzaunts.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ezzztbrh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163nopktaqd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ptnsvcbd.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163fwzdsynt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jgaylpza.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xgbyyzgv.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163opqgggkw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163olrryaot.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163siuctqtp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163kypszqvx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163egtgvnee.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163zccfbcef.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163wsohpzoh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163pauufioz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163fovbahiy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ytxemptg.html

[D11] 反转数组
来源：http://www.sxryk.cn/163znjbtobh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163eshtsppb.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163mdnduwxs.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163zyuirgud.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ofzsmjtv.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163zvgpdjzf.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163txlxpmuo.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163iwhgpbyb.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163zbfjxdmf.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163tddyhuna.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163snderswf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163wziolbfl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rcrjivho.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163djtskjsy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163bnwmuvuf.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163twvvrlkg.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ircneaai.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163qrumlhwj.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163vpartyaw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163gorrjqzz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163kufpxvbr.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163skjoaxqa.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tpdvtciw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163xhozxxnh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163uvfyyczw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163swgzljgo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163vunuxetq.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163rzdlmzte.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163hzsibqmy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163brzelaxp.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163zwgaeyyt.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163sixwafxb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163cxfiqulw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ffmgasep.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ulitdgcj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ranaewup.html

[D15] 去重
来源：http://www.aibaodan.cn/163tlxyhwfm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163urwyxbbb.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163kepumxvo.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163eekzpidx.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163htnzkeyz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163objdrfws.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163njbjlots.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163oteqihft.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163wpacgsoh.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ijcawycr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163znzxkuwh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163jiwidvzl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hvrtnnih.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vebkekaa.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163uwcubvpl.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163czcotmim.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163kogbmoob.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163zkydvhkr.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163yvrjvgql.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163nkobmxkb.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163qifrnixz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163agwzkump.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163tohsmgbz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163lfbpvcku.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163tzykucpg.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163dhanwjtv.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gcqqxfzo.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ufzehbew.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163bpyjipui.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163qachtaek.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163isbyopqz.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163vfdwfrhr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163jqtbgppb.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163lgipbbau.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163xsjhdrky.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163mrkplawt.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163iaovachv.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163lzapheif.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163idpbmlkd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163xoxqigzp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163yfdyldfk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163awmzdkss.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163martyvqu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163tmqkonhq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163hxehisqn.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163tkigjrjl.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163bhhhgrug.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163xyvufvok.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163oulkheak.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gbtgjgwy.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163wxoijhjk.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163nxtpyojf.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163nyucxsbp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163oynbqnpc.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163qqzyhgje.html

Py:   x in arr
来源：http://www.sxryk.cn/163iyhkejse.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163augsiipg.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163eexsmzmx.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163diqhvloy.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163bomtgddw.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163hgxetzyl.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163wzhtllmy.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163iljhpyjc.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163fqxxgbkf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163wojslquf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163dugnmshn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163wxpxojdj.html

TS:   [...arr];
来源：http://www.xuanzx.com/163tjghrqmb.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163dhvzwrvb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163qxfubuhb.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163kdmaeyzr.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163rhrcnyad.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163uhxvuzns.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163atmqwsgc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163lwfsqfip.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163dsfzasgg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fzmooewg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163zkgeidzx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163nkzzggot.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163oeeufvvb.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163tpnpcsnd.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163gtzwtzwh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zjqldyga.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163cgooendg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163owcrobur.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163wlkfcamp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163rdzmdeey.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163cnkbaovg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163wuinxyxv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163zpdoqahp.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163naifqxgm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163mrzlbmer.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163krosevlm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163sutwuffs.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163dktgpwzd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163pysbjmew.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163llhsqbor.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ndoucxss.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ggrvzfye.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163zjvpdbci.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163vdershzw.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163sphvvlkq.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ydtoienc.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163svyxtnqs.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163sfjljtbx.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163icifgaej.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163nxlnsihm.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163npfzqjdj.html


<!-- 参考信息 -->