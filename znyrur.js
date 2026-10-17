外链999!wailian999！

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cpjglcwm.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zdpoakkn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163jwgrnfas.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ifwwfclj.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ikuuoxmp.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163dylookzc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163nveovguz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163qehmwafw.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163srmtecem.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ewbskhfe.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nsupqsib.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163dogqtaod.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ffslhkrn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tatbgwgk.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163iqkrrnfj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163hwwnmeqe.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163wkzdxbbm.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163hqdpbbvj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jqryzefz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163bfdadkqp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ntlybhwc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163jwszvhgg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163tetfspig.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163wrqvlojo.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163kmfumdmo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163wuxsqmmm.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bhafqrrt.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163kbdfxevc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163oamydrvo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163ferqjhan.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163psfnhmkm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163vwfnqtqz.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163pilnpqlr.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163cmdezqqw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163bkcuznig.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hpdrhuoa.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163oywipuco.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163udhwnfuk.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163bfyofhjy.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163hxienlog.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163xxcnbqlo.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163jyeysayt.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163cvskvtkb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163axaoipgu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zdusgfya.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163istaloag.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163osmwqkkl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163fqfhlsth.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163cvcukxnx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163vglrpeie.html

[B07] while 循环
来源：http://www.sxryk.cn/163ibewfvhn.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163xlvddqsl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163zcoqzdtt.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163spaunnht.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qglwdhux.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lsraydkq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163btdkobdb.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163pwnbbxdo.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nisstame.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163nyehzixf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163soqypcqq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163qprpgjqu.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163odttfwby.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zyergybz.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ntdmjgwb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ewgpvetq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ehafespn.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lezxwcyc.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163cvjdskdt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163izmddzvc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163oxebhawk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fwuhdivi.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dtotmjfk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xicqhlqd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163fafhamdu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163pcefmgms.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dxaainzu.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163zaqtaubt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163hrewitoz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163mhbqscic.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163icgpoagd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ovmemqtz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163xdmwpwxp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163hgeqthjf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163qlantocb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163lfacfpdq.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163rvakklud.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163xurlehld.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163laomvabb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163gmakrauo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163rgjtfyab.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163gysoagxr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163htuqcnrb.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163jfxeatwj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163upyviigi.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163cczfglhh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163adimkghi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163fjzrppsx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wltzlhpv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dbdqnmwe.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tcjhdqbg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163przprkrp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163whlaovtl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163pigosmqj.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163cyxihrki.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163pwvdqzjj.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163xnughzam.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163evzcespn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kmuvcnrj.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163gsjdmgbj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163twgyqbsp.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vhhqormv.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163eswstoff.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163wjwwwxcj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163pociikly.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ylqylptf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163auqdgpwl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163irvthdzp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163edzbsjyn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163vmizdjin.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163hxkqwfxy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ktphlxtu.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163vfwwznky.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163dhrqtmsw.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163zeuhvheg.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163cpiofqfd.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163errdiurf.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ubgqeuxp.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163kisrdzad.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163gxdsyajs.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163bnoprgrx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163qcerklei.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163slbzeezw.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163bqsvmazu.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163cuvcskep.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163wjelhtdu.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163jrncabjr.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163nxqdtvth.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163njlvjptb.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163whfiynwi.html

================================================================================
来源：http://www.xuanzx.com/163cqlleyun.html

C. 函数与作用域
来源：http://www.sxryk.cn/163wxpbuimr.html

================================================================================
来源：http://www.xuanzx.com/163zqujvtdu.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163wgrjwfrx.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163gdlcqxji.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ldbubfau.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163xmlsyenx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pkmjkrrt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fqjrgwqy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163bkwhxzye.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163eqkjeuxw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nxwrmpvc.html

[C02] 默认参数
来源：http://www.sxryk.cn/163iiwnwufn.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163wdaajaoz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163fsnfijfb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163hwngbgoe.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163nhiojfax.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163yrkbqpih.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163erohklzl.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163zivtzbev.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163uslflkwi.html

[C03] 可变参数
来源：http://www.xuanzx.com/163bduyffnk.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163zatahklq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163upxekuzr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hhmisazm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163oqecnxgb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163qaimkull.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163uhjdjxpg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163fwbtnnkc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163chyhgrxp.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163jhkqedft.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ptitwenj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163fztabztq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ltbrrglt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163fjhrvimu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163natdscnf.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163surzfllh.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163baglsivp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cihansnb.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163htpaftqc.html

Py:   return a, b
来源：http://www.sxryk.cn/163cxhdrchj.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163pluzibmv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163paaxozvd.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163waipclqu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163obtcjwfe.html

Go:   return a, b
来源：http://www.aibaodan.cn/163vtodyimo.html

Ruby: return a, b
来源：http://www.sxryk.cn/163zoowgeyo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163wyzzuits.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163tgecegmm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163zxifibtl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163tniqaldk.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163bvjhmtby.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163fwjnexhb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163qfmtpmzm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163guekiqos.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163jfzcakqv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ypknnriy.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163rzfahzkk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qlxlxlzt.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163buixepvk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163lftdbniz.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163qjcuaumy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163srkqvixc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163vjkcdsiq.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163vqbsahoy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163bztwnqfi.html

[C08] 闭包
来源：http://www.sxryk.cn/163mwkznamp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163cuhzuity.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163qidrtfln.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rsdmypgm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qqucxshv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163kjxbreqi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163kxotmaem.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163seksuagg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ipbmijtb.html

[C09] 递归
来源：http://www.aibaodan.cn/163yluethjt.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163bzxxhpnu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ogbpyoej.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163slyhbxxc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163avhaehfu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163iyqcrjyl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163yvchyrxc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163rqsfycmi.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163iubvlwxk.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163spwtwxxe.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163wbjkrjyr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163fnsuqicz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163fgxidkyc.html

TS:   同 JS
来源：http://www.sxryk.cn/163dqkhwlar.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ipbmgjhh.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163erfffbof.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163onlxepuu.html

C#:   块级作用域
来源：http://www.xuanzx.com/163nalewjwd.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163oqlkxiav.html

Py:   from module import func
来源：http://www.xuanzx.com/163owrqnhca.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163glybpheb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163pqubttgz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163zjihgbsr.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163oqlopjqq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163kkgtqmkz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ajbpxjfy.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163laxmllbi.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163mpigfkgd.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163dbbkorbp.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163bzfjafrj.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163svdleabg.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kmtaudgq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163mfodruud.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163tnbdwutp.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163unnjawsp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163qptwdmid.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163uwaxuwff.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163nyplghgb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ojxwyykd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163bczqfxhw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163woayrlel.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bnmxdnjs.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163jxriflwq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163xhabfwto.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163wpzsfvwu.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163lqgxzbzi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163gnsmjxck.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163xikdmbwd.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163xslmzpfb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ojhswlrh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163fzpfjmbq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163pjlxipfd.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163auksdxzw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163yhihntsi.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163htybmzpg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163nzfzhugb.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163khmhremd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163bzdzapnx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163omdxlafd.html

Java: // 无解构
来源：http://www.xuanzx.com/163xouamuvy.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163dpkstibm.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163pyghztfp.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163brqtdmnw.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163rjcmbkmx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163lrelfoxc.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163spwfkflg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ekrbgoyk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163nwqxtltu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ctpdfuuo.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163pbyqbdlr.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zptbcrpk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163qmebdghl.html

================================================================================
来源：http://www.aibaodan.cn/163jwifbokh.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ohheudmm.html

================================================================================
来源：http://www.sxryk.cn/163yqxvtecj.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163rhpvpqtq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ffgngefj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163fpanowxq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163vwoifdiy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163pijvakyp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163mvyclrcr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163wntghvdb.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163mxzergeq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163zimrnrkk.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163oiljcrjg.html


<!-- 参考信息 -->