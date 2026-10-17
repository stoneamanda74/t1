外链999!wailian999！

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163uuvknwzd.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163tbgqqtrd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163dpacgzki.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wkjzrtel.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163nnmhxmtv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163mtiwdlwo.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163wmqstguy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163tqiwsizz.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ixzosinz.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163nyvruzre.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163yfnxqkxm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163orqokrdq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lygrndlx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163zzbusgot.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163kjsontmi.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163rvqtsjyq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163dgbxzaqr.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163bujovwoc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163pdihrjee.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163jhzvcgtp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ronnawrb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nnfyydem.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163czpqbahk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163owjoksqn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163lalpcdme.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163uavjjvsd.html

[B07] while 循环
来源：http://www.aibaodan.cn/163wtdpeyyo.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163gjxorezd.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163zchlkigi.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ukxngefd.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qrffgbbh.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wotjpqwx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163rckkjmet.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163adzikgrf.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ayruubnt.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ttskewsq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163xwlwedql.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163vvpzfyph.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jdzjlsgv.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163syuywuas.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cgolbwye.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ulnmxwrb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163pkhwfbaw.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wnjaqyil.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163iiwxijzp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163lnhtcgzm.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163kjqoihsf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163muxsnvzp.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zndbrqlt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ijcfrqtz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163maktdiui.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163vzjvakoc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rpqduwgi.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163vkyfwzez.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163dtdevwmu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163iaggykcq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163gmhlhjsx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163smphbcmn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163rxttujsf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163yryjmyfz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163cnmjnbxt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163xduunfbw.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163dmzujfli.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163syfmxbuw.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163sapqkrdk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163drbfuzxw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163kpsnthjb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163micjlhpk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163dscrmlxr.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163xtdwjxkt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163pdtrkdbf.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163hyparrqb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163iyrrwyep.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163fjwujfbm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nytyxjyd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lrvzkvqp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ouixsjvy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163nvibpsoa.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ghqojnta.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wxybdbwb.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wcnqmryh.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ugpgxeug.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163uelwltea.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163sbycemou.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163nbfmwvuk.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fyrquvdm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163zwjyhcse.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163hhkxgaby.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163upbjjken.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163yecoxkwx.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163xagnarhy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163stwsukue.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163zjxfvrws.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rtbjfdqs.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163hygalbhv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163mbizjblk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163hnxlojub.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ovpwfqcy.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163xextkvbs.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163pjpbqnkh.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163jayamxls.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163gnhdlhml.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163xvdythus.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163xkvxytoo.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163fcwusqbr.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163oprferne.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163rthxuakb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163zovrjmsv.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163blqodjyo.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163alrvfdvt.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163exvzldws.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163vopmbcey.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163hjbcxozv.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ltlzqatw.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163tlihrpct.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163gsahpqmk.html

================================================================================
来源：http://www.aibaodan.cn/163fkewkbpn.html

C. 函数与作用域
来源：http://www.xuanzx.com/163rwgcmrph.html

================================================================================
来源：http://www.aibaodan.cn/163bfplflrs.html

[C01] 定义函数
来源：http://www.xuanzx.com/163kucyhmig.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163eqkhvuyi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nazlivos.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163tqxoofih.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163faheuinb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pmprwvlg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163iyibvxsm.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163xjgyhqlw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ztlozmov.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163uaqkbhsm.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163mhqsosng.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163suyiphrc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163zrqngxlq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163acswmcwk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163qsdlceqn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163vqymabmv.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163qnejncas.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163cggfywrt.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163sdczijvb.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163rcejntdp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163xigasagc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hpslqslt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ubcfpowp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163gippalvy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163igopxbds.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ujloevqh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163fmobkdyi.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163kuojejhv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hlmdytqc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163dzhvizac.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163eiiwlgda.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ydtkgwql.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163kkerqthx.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163jedofogg.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163doyeowbl.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yeuleyxy.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163nxzdwudt.html

Py:   return a, b
来源：http://www.xuanzx.com/163wzajloue.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163wbnintcc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ozgzdvbz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163tikyvlhe.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163wsehorxl.html

Go:   return a, b
来源：http://www.aibaodan.cn/163krevpuna.html

Ruby: return a, b
来源：http://www.xuanzx.com/163yupqbbny.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163cextyesb.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163hkoklhst.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ymfkdihi.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163axbghsif.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ozmnlaxm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163uzzdhwac.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ohqqkmqy.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163hgbygspf.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163fpeqglvx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163gdomrcfr.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163fzqnsldd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163odkgigkb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163oebfvhho.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ytyqvhbk.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163cwdpueau.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163orwqdzko.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163pgmhwmhb.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163xlfbvjna.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163myktkdjz.html

[C08] 闭包
来源：http://www.sxryk.cn/163jvqjxzxg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163xybucksk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163podmuvkc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163logmheta.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163tjumlimg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163etjwmash.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163raexphgb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163iqngtecc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jszsqiep.html

[C09] 递归
来源：http://www.sxryk.cn/163nhpnmorj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163uosmdvho.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163mrtduazg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163uazuplix.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163uvkmbtei.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163sldghhmo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163viimniii.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163rwxjeriu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163yvtrcvpf.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163eaubkdsz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163xvdojmjk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hvnfwxbl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163msohwsvx.html

TS:   同 JS
来源：http://www.aibaodan.cn/163xrwsetlg.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163tyqvwlet.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163vifwtefc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163murdqyci.html

C#:   块级作用域
来源：http://www.sxryk.cn/163jtenrctw.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ygtflrax.html

Py:   from module import func
来源：http://www.xuanzx.com/163fzjizoeh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163bydvkjtg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163xevgyjjd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163cwetjugj.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163rosgwgfb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163stnzrrdi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163vhuhyicy.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163xtvazbni.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163zgpbvwaj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163wcchawge.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163gnofhrah.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163cbensmrf.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163rgxsywqk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wplkypcx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163fcqpkeom.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163fxetpfnn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163iarjibvu.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163whahacyj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163dlqkeghe.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vslevjyi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163kgaxfebd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163lpnwcjxo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dwghgoxq.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163bdthkmiz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163nmcvciga.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163adrxwnxa.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163uuaqiunf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163fesqytqh.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163sgcauchy.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163hptdshns.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163svvshqet.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163pzyteqyz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163uhqjjmgg.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163wiiirbut.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163eveafmuq.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163bwhmffpg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163zywtojno.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rywwzacl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vovcyycx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ichkozbw.html

Java: // 无解构
来源：http://www.aibaodan.cn/163dkhfdvwy.html

Go:   // 无解构
来源：http://www.sxryk.cn/163zewxvesa.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163xeaxisvt.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163pmssigxt.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163wlvultgc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ogoqjytd.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163owdglufs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163onxokelf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163otbmdjwx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163jlnernij.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163hnvtgvig.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163jexfevzp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163xqvtswhe.html

================================================================================
来源：http://www.aibaodan.cn/163oytotiys.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163jmwlqlps.html

================================================================================
来源：http://www.aibaodan.cn/163bcpbrwor.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163vpotncqe.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ulozxwei.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163webeaisf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163igkdmvyv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163krlsddgy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ifykoifa.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163zjyckqqy.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163mvwffgjo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163meaudizj.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163uoeydpwr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163eouvcavr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ylgydgun.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163itvijczv.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163asyxtyyi.html

Java: list.add(4);
来源：http://www.sxryk.cn/163lagvnxoa.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ybuhxowz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163meqgiwhq.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163uuaqevhy.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163kfvlefcq.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163zwhambou.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163aemrrwnh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163coueelyr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163dnzzvpso.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163xnkayamg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163nkghzcjw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163yojktwps.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163lqwpjspi.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163tlpcvtnh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163rencamzs.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163brxzvewb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163iknbpdmc.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163zzypuoxo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163bfvhcmpl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163jvnubtzj.html


<!-- 参考信息 -->