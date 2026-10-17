外链999!wailian999！

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163mdzkaikr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163fvbopuim.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ebnrenwb.html

[C09] 递归
来源：http://www.aibaodan.cn/163dviepuyv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163gyctupei.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163grydmbdg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163rwnhzxor.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163iedfxmaj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163kgdejotz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ierzcdkq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163tfrdoukv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163bocbccgy.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163isxkihwc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163jhkoyaru.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163bozaiucq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163jevmgfne.html

TS:   同 JS
来源：http://www.aibaodan.cn/163otawkiex.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163fpiiojyt.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163hznrpsvc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ngrjhhzj.html

C#:   块级作用域
来源：http://www.sxryk.cn/163wivtfatc.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163rypbdxup.html

Py:   from module import func
来源：http://www.aibaodan.cn/163xuezhmiy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163dzrkkorz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163uijvczlm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163tjypioxx.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163dpvwirua.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163nrqqwrjb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ccvdpwwe.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163iqioipoz.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163myqdpfxw.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163iaqqcbsc.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163odnqvfdo.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163eptqlepc.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ulamdurs.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163owjdsliw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163vmjqnavq.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ngypsxqw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163nszxmaln.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163xsxrchgi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163chyxtlzv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qecvyyfr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163utpabvog.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xaouvvnn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tkssximd.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163yhaovmzx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163mnesiqbs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163wexddfws.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ztgpkugn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163iqvgzpxs.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163obzengwy.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ggruxnia.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163cqeyareb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jdrbqlyd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163wkrtazph.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163hsbdgtrh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163cgscqrvj.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ajoxiygs.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163gogdgcvu.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163dylrkvow.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ugbwlpzh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163zwytriec.html

Java: // 无解构
来源：http://www.sxryk.cn/163qeuygotn.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ctaguyei.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163bxyzfmak.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163qyxbxkhh.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163mqovqhej.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163alnilpbw.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163rnxxjeel.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ofqsmsdz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163cgnyjuis.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163tnhfyxgn.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163qpzbniea.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163myqgabog.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163imdyffpo.html

================================================================================
来源：http://www.sxryk.cn/163swpplgvb.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163poaqcevy.html

================================================================================
来源：http://www.sxryk.cn/163qyhivzwq.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163bnxoorwz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ujxazaio.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163owbtlpwl.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163uqewnyvg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ilsnbrtp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163bxfdnqkv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163wabqouoz.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ppjljush.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163mvoaaigr.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ihfgtarx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163uiwkpyxf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163nxdmteny.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163kurwafix.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163fcxsgkyl.html

Java: list.add(4);
来源：http://www.sxryk.cn/163lzgrvvcc.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163njhounlk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163oapbmvbk.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163rsovcqdi.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163aphhkmev.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ogavizyw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163rwzradby.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163svxzuaxi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163guuwbpyq.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163fwypwirv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163mmxvpqzp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163obxityhd.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163mqadfftu.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163tcccxmmt.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163phltuirt.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163wcmawqpn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163qyaskxic.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163qohpskni.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163nwtgekxm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163pngjgxug.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163fiamjmda.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163nehiivdk.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163dbxenonr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163aiytphcj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163nmmnlqgr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163sgphmcqz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163qizcoxho.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163rnerapiz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163kikhodap.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163drwnrhhi.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163okuwvogt.html

[D06] 数组长度
来源：http://www.sxryk.cn/163gatvjnil.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163kccvomfs.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163kzyqbxwx.html

JS:   arr.length
来源：http://www.xuanzx.com/163isoxakcf.html

TS:   arr.length
来源：http://www.aibaodan.cn/163litjnrtq.html

Java: list.size();
来源：http://www.aibaodan.cn/163kjjyzvpj.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ubzuberh.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ydsmurzc.html

C#:   list.Count;
来源：http://www.sxryk.cn/163mgoxvajx.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163daxbpqei.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163itjetyyu.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163jqhslcht.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163elnhkafr.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vlysmmkz.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163moiljzdq.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163tzunheqq.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163aaxoxkpl.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163slusfnus.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163wrgsoxrc.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163offsyljl.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163uvvbvgji.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163kvzewton.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163dmyifved.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ueqilqiq.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163inwpohvs.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163jdtvumcu.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163gxoplimx.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bjectlei.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163eukzbxzy.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163hrrcqctr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163avxpbyjr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163paemskmz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163mmjqoqnm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163gkemnvie.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ogiydgua.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163dvzbwpcs.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163rfbeijbm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163jtirlexe.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ejyreaiy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163dbtrnims.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163dvkerulc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163qhodftkg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163bqkkkcsa.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163hgdhxuin.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ulldtjvw.html

[D11] 反转数组
来源：http://www.sxryk.cn/163mkyzwfcb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163zjatsuxl.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163kibstyco.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163olhmqtpa.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163pqtqhgam.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163dduwxxhu.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163okmlzcbk.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163zyfasrdf.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163liapwiyq.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163nirmxapv.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163plhalcuz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163motemnfw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ubhjcwcn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163spxcufzx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163vtsorvgr.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163xwufscit.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163kvnwcdbq.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163bujgezvj.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163gjuwsclx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ldjpmgfe.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163kkzmyyfw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163onvsyhic.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dasjjmql.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163xgomwzxu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163bdqmpwzk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163pmkwlpkf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163faaoyypm.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163fcclugpc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163efnlgilm.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163eaobvcxd.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163olxjbyoo.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163anzbwtqy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163qtfaippi.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163duoplklm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163euxaykqf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163jvysiomn.html

[D15] 去重
来源：http://www.xuanzx.com/163rloylgzf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163lhowngzx.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163fueqdidx.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163htngweoz.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bakjiojq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163rbbmcimu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163dgefdghm.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ydowaqeo.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163vaxrsmqz.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163zphhansl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163tlkddwyq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163cwvxrnkl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hphypqfs.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163lliruiti.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163oihiquhe.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pzzjgjmw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163sptxnnrd.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163qsbhsamw.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163kxgssejv.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163mkekqysn.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163qnhzrlhx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163pbplcrzc.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ijutncef.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163btttpwho.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163yrpsvrak.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163wdylwgyg.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163hbgftlej.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163aaauagaq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163upmpkgdw.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163jartuvoe.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163naykdpby.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163zfxbxwmo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163jsfvdvvm.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163hvfnbdob.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163vmfzjaem.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163oajzceus.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ormpbphi.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163yuhyjgdb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163cjlnobpr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163vvduwiwk.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tylqqjbf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163scbmhhrl.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163bxnermcm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163bsxaygwn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163yyeuntts.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163seleillc.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163jduqewrb.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163vdxisrfq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hgtmbmnp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163mnrvauod.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163dgponbbp.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163gvhvyyjs.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163qukgmgix.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163kqswdixs.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163cxpaxpfg.html

Py:   x in arr
来源：http://www.sxryk.cn/163qwghjqhl.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163wckpvsma.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163zilphdpn.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pminylxo.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ukjeltfv.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163btrhyjlm.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163rztblcsq.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163bkbbholy.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163mbjnilbe.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ouvrrmzq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163wxnsiguc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163tiwirrqn.html

TS:   [...arr];
来源：http://www.xuanzx.com/163yofmzjin.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163dahtczpz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163aoxmdlrj.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163djthfjzj.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ceirnvli.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163nqynngyw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163osekzviw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163lqnlhsdu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163odnaxktc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163djolbogh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163gayjucdg.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qsvgtezu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ndcomsty.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163izusfkpt.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163wfgoliue.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163tadkzomr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163hgglxprr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163izsuiaux.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ziewszzw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163vyzetnyo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163kunuhcfb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163wrlvwexz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163lsyswncb.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163qybpygir.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163uegdfjau.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163tartchut.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163qimdhsjm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163qdzciuhj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163antnmmgq.html


<!-- 参考信息 -->