外链999!wailian999！

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163nitatvcp.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163xkauzsza.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163hdpouepd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163tnvkrzep.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163rjefgfgp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163tnhhqhky.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163tmpdwezu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ndzopsgu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ffctanep.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163onlgzzkr.html

[B07] while 循环
来源：http://www.aibaodan.cn/163talttjiy.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163muniktyb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163gxpzhenu.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jseficbu.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163txdgizry.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vdpgkirf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163lrdipyxf.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ackmkygd.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ibpkzyoi.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ciuvnhdr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163gspgahcb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163sislhnfr.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qqtgxkjf.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pgdqpdsd.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qdgvwbzi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163hqyaajbf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163xyedjlbu.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vnbxncad.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163bhfszlcj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163pqbeomcd.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163trntomul.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zexjkkix.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gankglho.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nxvcaxdy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163hafljggs.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163xcftjiel.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ouamzgwo.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ogrflupy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163oboiyxad.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163xsvzdvgh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163nixwsukq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163dwdniwfc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163bppvlimj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163sxlrdyhl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ddyqjwga.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163avlsgtru.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163vdkbjeko.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163erlyueju.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163yszwbmfk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163eujikaxj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163clrtfmtc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163tbwvinut.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163qitcunam.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163khsweahz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163hhbrpqec.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163wzoolhck.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163yicnkdwx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163hgnwskde.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163inixdbdz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jdbwcghh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qryzqrny.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163gyjkuwzl.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163vmjegkpw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163emjmojee.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ofevkrel.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163pmxqhopo.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163rohezjim.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vuevwmot.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163pcahgopz.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163qztgedls.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ywfhcujy.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163eqwavluq.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163peuyiwtf.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163dufbpfdw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163zsdhtoen.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163hfkntvil.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163puyxatmb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163qtczrxwt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163loknlqas.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163qncfwcek.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163haknhbny.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163cbdearnh.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163qxfenkys.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163tegdoqqz.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163djsbsepw.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163fdcgfndh.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163rkbebphu.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163qjxcvaia.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163arkccesw.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ipunvrii.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163skezesxi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ruvbknrf.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163gvebsrpa.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163olguihze.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163pjwjagwc.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163tvcuggkk.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gjlnwoie.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163gsnywbki.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163pdboexlu.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ghromxme.html

================================================================================
来源：http://www.xuanzx.com/163qwssfdwy.html

C. 函数与作用域
来源：http://www.xuanzx.com/163tstmtxqu.html

================================================================================
来源：http://www.xuanzx.com/163kcegkkah.html

[C01] 定义函数
来源：http://www.xuanzx.com/163wmhzrhow.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163jcxdfovs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qdmtkwqv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163lqtmwrwc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163tpwpmhkx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ejcrdzof.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163nbkdewet.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ynfaqxvn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dlwiodlj.html

[C02] 默认参数
来源：http://www.sxryk.cn/163jjwpuhqd.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163wniostve.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jlmbdvan.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163rvfpemvg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163mhufzggf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163dvagokrh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163awywgxin.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ancptsba.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163wlkrghmu.html

[C03] 可变参数
来源：http://www.xuanzx.com/163milafslp.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163bbdjnjdc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163aakyyjlw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mrvpqhzw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163whaxwqbf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163rmlillwd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163bsdejfzz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163dbizvpmj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ojozsfud.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163gdkfjoyt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163tdlppldq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163nkvldszh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163snrpqjlz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163xckdhmat.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ehdnvdow.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163otwvpsmv.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hpuccywa.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163emtwluod.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163sfpmvaqp.html

Py:   return a, b
来源：http://www.aibaodan.cn/163elhxscbh.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163gevnvnlc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163pnxrorlh.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163iuwiynlf.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163sogccdsm.html

Go:   return a, b
来源：http://www.aibaodan.cn/163klezepac.html

Ruby: return a, b
来源：http://www.sxryk.cn/163uchwgxxj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163esurmxyu.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163punexdpo.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163fojddtxb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163pewobxrq.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163stnywqhz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163zvpeemcr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163hglkvrwo.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163najfrvqg.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163kpxszzbr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163hlsiabsw.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163llilttoh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163tptceggu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163khiwuzkj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163pxwekuco.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163qyezleqd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163lrmgwqim.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163bbejvwxv.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163dqjacmvi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ikoawniu.html

[C08] 闭包
来源：http://www.aibaodan.cn/163mzlmvsqv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163pnskwefz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163rohstqip.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163shzjryaz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xtmuwfib.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163qbfeswyq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163axteksoa.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163yxylkfib.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uonvepnl.html

[C09] 递归
来源：http://www.aibaodan.cn/163zlkcypbr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163qjzvhsgi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163fofhuyqt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kdpydqbh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163augvihiy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163lbiquagh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ludlnatr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vitiozzb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163wufamqiz.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163kljffzpf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hdzgjbmx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163zrtsweqv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163erubujwo.html

TS:   同 JS
来源：http://www.xuanzx.com/163jbfxivzw.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163wwbkjuya.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163fkcufqbj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163soibonjx.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163cscdbhhk.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ctkloejg.html

Py:   from module import func
来源：http://www.sxryk.cn/163gsynfiha.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163uktsjbvy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163kgzknxhz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163bfadqvfo.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163nhvtsazv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163zhliekdw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163mpmqdtug.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ibamdqxu.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163nbccjtgp.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163iulswsyv.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163pwikflsu.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163scdaibnl.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163egfibeda.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163kzwoddwd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ylbuckzj.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163yvitewru.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163rqvojumb.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163lodeizdj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163utmmqsee.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163eqwdbynt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163wmvvjrze.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163jgvvxwjm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ciqzqvjf.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163xapyvtnw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163htcmeisn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ytpdtiff.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163fasryltz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163bdwfddsd.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163xljehotn.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163vyqflnrq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163xsjoonom.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163hyopwfao.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163epsmlizy.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163qnwyphrk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163anxensbh.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163xrzmxhol.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163szklqtjy.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163nooubzzc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163sphpwokr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163sdiabyhl.html

Java: // 无解构
来源：http://www.sxryk.cn/163vcwdvrog.html

Go:   // 无解构
来源：http://www.sxryk.cn/163eohjzgxh.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zktlkntu.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vbyqwrue.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163bptqzsyd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163hkewdfrk.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163tkhfkyxd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163advpyvgi.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163rsqsnsro.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163gzstytfm.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163uedxsavl.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163yclqrlet.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163bgmlvckr.html

================================================================================
来源：http://www.xuanzx.com/163dylhoihz.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ctziydqm.html

================================================================================
来源：http://www.xuanzx.com/163aqkmyqbf.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ewjfymiv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163nqyonhrv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163qeexpsrh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163xtxlznhf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163gncsoxbt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163wavjbpvf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163kdarijqf.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163lnunzmgq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163duavjnjg.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163uzpybmta.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163jsmdlgnn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163jgjvyxrv.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163erusyfep.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ftcttltd.html

Java: list.add(4);
来源：http://www.xuanzx.com/163hiecpuhr.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163usbzvdnz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163tqzhjdzx.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163wacvndja.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163jcelkvfw.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163dkvhcbpj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163tlebbfxe.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163sqwotzwv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163sctfrqys.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163hfssnybv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163nzykpcas.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163yyckczlm.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163yogkwbnu.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ddvmafzd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163thurosrb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163fijjghda.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163rmrsewua.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163zqfuirhn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163fwdydcij.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163atbcnuot.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163zroxkhoa.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163eumhgptf.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163frhrccjt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163dsyohhyr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163hvoydcql.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163spkndtrw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ndbxefib.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163hhaespdg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163pkxuwnbz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jbazurcf.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163antzjiwn.html

[D06] 数组长度
来源：http://www.xuanzx.com/163nxsxeahg.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xdstsdbs.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163wjafcrss.html

JS:   arr.length
来源：http://www.xuanzx.com/163wbdbhkbk.html

TS:   arr.length
来源：http://www.sxryk.cn/163dlpipdeh.html


<!-- 参考信息 -->