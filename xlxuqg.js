外链999!wailian999！

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163nsisxfud.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163qihruljd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ylctesso.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163gwmcmkag.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163sdkagzca.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ftkbwoej.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163hjsoehrl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163xemviach.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163xgbyguoe.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163idpsktvc.html

[B07] while 循环
来源：http://www.aibaodan.cn/163aqhfugjl.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163vmstepbo.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163xmxterjs.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ixtykfmj.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hultdyrg.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nnehnsil.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163awusijdj.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163dezkrbol.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jzwepflh.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163edymwegv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163mqhqzycr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163aazkoedz.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pwelzxap.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ipywxtyr.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cowxztop.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163rvctrtmr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163hlmfgcjm.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ihgzyuyn.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163oazraxuu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163xjlxqqfs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163jqlcmttw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fkztyxvj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nekbopzl.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ipevekzo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163yeypmxbz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163jnbkodnk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sgarmorn.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163vsdfyzps.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163oojpdxiu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jbtfgkbr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163qcwpfvwy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163rcyytxzv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163xmfuomhh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163rptmadvs.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163bpblqanf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163himeylug.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163kjmfhael.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ddflqsmj.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163krrcsosx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mryplwmq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qgegqnxp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163epentnol.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163snsxycwb.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163fcfawtcw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163xvjkvmzz.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163jnlwtnob.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163wfrcilyn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163sdumuuxd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ljxrbxro.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lrkagfyk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pmbbrbbu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163gfmtfimu.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163yegwcdjp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163erudfxty.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163qqxghujw.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kooljzhb.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ssgvrtks.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hljtujle.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yphaslkj.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163xxqaizaa.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163knyoqycm.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163pfmgxnvn.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163lwjmmohk.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163jaeopocp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163oyxwoqlv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ibpzafuq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163iixmwycu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jfhbiket.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ebdshpjw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163fwvshzpd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163vqtpmkld.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163pnbxbtnf.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163dvjfwpqw.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163cojfjiah.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163kgbtkres.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163gqbcsbzv.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163otmhzmli.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163veernamo.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163pezghwgt.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163eazbkmvr.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163kjxmfxad.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163kieftvcy.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ynolqhrb.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163mhpbsuti.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163caevvjfb.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163yznusvja.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163zzeztvoh.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163qnlhtalk.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163wztpehod.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163trqlhnuq.html

================================================================================
来源：http://www.sxryk.cn/163apblsxjc.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163wzwtaezk.html

================================================================================
来源：http://www.aibaodan.cn/163acbczuxw.html

[C01] 定义函数
来源：http://www.xuanzx.com/163yizsqzts.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163jnocooel.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lwhocxfd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163pxwawdfr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jogkrhjj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jnzevcas.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163lkbsbobf.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163wkvmmsmf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dreejfwz.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163pvvhubof.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ukrdnfes.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163vvnafofl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163bbuomcft.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163jacqpyfb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163bsdwskqo.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163bjjjhkno.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rpyvzqdu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ltpdgxsj.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163hklmbozx.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ryqapawj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163hgppmwre.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zbxvtytd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163klmintxr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ydtixxnh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kxyspvct.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163vjnysohp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163atlworox.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163uuzsboce.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ocpojuot.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163soadjbeg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163osvvjfey.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163shynkgka.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ltmweaif.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163tztjijkk.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kzpvdvyo.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rzubgare.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163gyzcbtoj.html

Py:   return a, b
来源：http://www.xuanzx.com/163xdcjjeqp.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163qrfxjnwy.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163qdyqbdix.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163hkqmqykc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163zszoirfs.html

Go:   return a, b
来源：http://www.xuanzx.com/163jsvogusa.html

Ruby: return a, b
来源：http://www.sxryk.cn/163fqqwedvy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163fpnovnrj.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163mlpqyrzb.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163iylemhws.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163vuymmpai.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ndboizih.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163pnvavswa.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163pzftyvcw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163uybugpze.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ncmpwyzr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163trgveziw.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163mxljgvmv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163roepncci.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163krbiuelo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163bygkjlwg.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163mpeyctkt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163xdlxxrrs.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163eshuytjr.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163yegdngai.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163hjagelix.html

[C08] 闭包
来源：http://www.xuanzx.com/163kxmizjmv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163dvycutxc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vsangqcp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ecbasuej.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163htggchzc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163fparivym.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163xorqbyfx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163hnnetxdk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ngnmuhfo.html

[C09] 递归
来源：http://www.sxryk.cn/163owhfplel.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163qjvamkqe.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163iboexnpd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mhjvrlvl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xczqnjzk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163dqsigpag.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163lqerufnv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163pmdyjkfk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163vdtnhhpg.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163llexkwcc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163jowgivox.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163yymoyhhg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ulhzwqqf.html

TS:   同 JS
来源：http://www.sxryk.cn/163asjoekew.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163alhokmcz.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163zqdbtcbv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163kaevvyws.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163gaawjirn.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163argwdwxg.html

Py:   from module import func
来源：http://www.xuanzx.com/163nonrmcyl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163yygnhegw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163rnvrmslo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163qfrmzeio.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163kesztiua.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163dcroqbzd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163cvrnmexh.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163sbhcrmuc.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ehnxfvfl.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163jmzjlfyu.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163itjmkwbj.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wjwikiay.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ufvpncjm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163laarmves.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163xeuiuckv.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163adepmzpl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163aazcyfjk.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163qjyblekx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163djlnquuv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zjcuqjly.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163cvqladzi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163zkunmqdv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163oygvkakx.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163qtqxyydo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163kjlgwdxp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163halfyqgj.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ofwayemp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ayfhexeu.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163cdgpvtfm.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163jsfvdwrd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163gfqkxdcs.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163myytxtms.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163hatbbwcm.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163tnjhqedl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ojlkbdln.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163wvtqqicw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163zqgsemuy.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163czmafsdh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163jmxrloxk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163hboinufd.html

Java: // 无解构
来源：http://www.aibaodan.cn/163hlrznaoi.html

Go:   // 无解构
来源：http://www.xuanzx.com/163kyaukhmy.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ippgzuvw.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163rbavacbk.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163esroeeoa.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163eugfbaxh.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163aqphldia.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ctxturam.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163viprouqc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163whcqtlby.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163rtpaxxem.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163jgrsrhiu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163fbamlgmv.html

================================================================================
来源：http://www.sxryk.cn/163mgmfhboc.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163nnkrqvat.html

================================================================================
来源：http://www.aibaodan.cn/163mzjsuqre.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163jpqfwlfn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163uixwmeud.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163xwlyahrs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163kmdlpsij.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ppzubely.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163dfcpqzsm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163lodsiipd.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163vticwbir.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163yofxvtqs.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163gzggzygc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163fooduppw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163bjybzfuh.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163yailzwfo.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163fzzsutcf.html

Java: list.add(4);
来源：http://www.sxryk.cn/163fiqzxehd.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163kosrtgvk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ebbucadn.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163etbmqrdm.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163cxykfjui.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163isafjnhg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163uhqawlcq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163vfezijmn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163qiebklln.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163osniowhf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163rmvwnttv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163fmkeemrj.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163zlzzxdcr.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163jvadwcic.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163vqeksbjk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163zwuhsqjb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163tvnkldyt.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163xszxoxsd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163uluksxqo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163mjpighcg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163raqwehmf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163stbphybz.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zbnbjzbr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163amfrlnqo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163keqabjym.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163cgzhdtnj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163lfbcefzk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163prhaihxa.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163eagxrvuu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163fxmnzukx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163tlklgusx.html

[D06] 数组长度
来源：http://www.xuanzx.com/163qjrraksv.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163vnapbxzp.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163qrazgcru.html

JS:   arr.length
来源：http://www.aibaodan.cn/163kjauozev.html

TS:   arr.length
来源：http://www.xuanzx.com/163vpgllpeb.html


<!-- 参考信息 -->