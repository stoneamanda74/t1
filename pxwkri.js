外链999!wailian999！

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163rihvelpz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xubctorx.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163cknytjns.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163qyuwpjll.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163uvprqfow.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163mfmuvtmx.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fbresrvm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163gemikqxw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163sjthgiva.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ncqwklan.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163jxyixutc.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163jazgumlm.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163wylmkayu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163gvrxupbn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163gqckvrkl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163mxiiglkg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163wtbgxcgo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163aswqrmqt.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163etdtdmeb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163etqlkbhn.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163vzcrmacd.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163iranwwvu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163rhsdbdtk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163gntsopaw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163kqdbbvbn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163teeojlyi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163cepuppey.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163uorvxgmd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163qrzuxdtm.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163vcibdybp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163adroptoo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163zsxmffsr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163clcwxdlb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163gxdssqux.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163utflrozr.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163hgofwojd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ehpouule.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163wlkvanrr.html

[B07] while 循环
来源：http://www.aibaodan.cn/163hvarwdlf.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163vnizzrpa.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163mswwmtra.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gukayezh.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163drittusi.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zyeciudp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163egvafnom.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163gvbpiipj.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hgzprjld.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163frnygfvy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163urchmgju.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163tvbzkrci.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163iogzpctg.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hlgjranr.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yjbxiktx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163fkpbyxrp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163wskgjdbv.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bkamffbp.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163krzpvdyc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163otxkcotb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163lhfspjfa.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dmoyzyrn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163scnhbzxw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kdchziov.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163npshuged.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163nlheieuk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163belrkcev.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163gxqdnwwm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ksdoujyg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163aedgwenb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163dnxqzffk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163guizihqc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ldldklnk.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163otyhrqfg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163brdnvihq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163suxxlgfd.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163mbnoqukb.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163piudyyek.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163nksitvmq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163algcbmot.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163yatazckx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163zwsqbndp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163epdmltag.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163adfwopfl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163gjagwdxr.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163orlelwvn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163spsdjsmx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163psbefahw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wbfgvhra.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zkgffsko.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163yvyttxnx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163tbdlreyu.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163wloxaqrq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163irkddrxa.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163kvzjoyfr.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163lxrsmhhj.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163wqjvvzba.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163bwfnrnbq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163eugujqbg.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163bnsnigcr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163zdjdtbak.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163nngzrmbn.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163rbxrqlbx.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163xqszofhm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163mtfjuwnz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163tbqduvmi.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hfzpjpcz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163llyaxdws.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163kmlcndjt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163bqqaeoeu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163edwroscg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163rnxccuex.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163dalfkvhk.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xadwhebt.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163rngrvbbs.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163jwbqroju.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163qgtyutmx.html

Java: a && b || !c
来源：http://www.xuanzx.com/163fektnxob.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163nbrnneat.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163sqiwiwxs.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163qcvitpbz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163uynwugqd.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ypzkqnyn.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163vzlphfdi.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163gfdvpgkp.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163aephhsxw.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163szrhpeei.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163igrblkvo.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tiiewlru.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163wgnyyhcq.html

================================================================================
来源：http://www.aibaodan.cn/163qpbrkqff.html

C. 函数与作用域
来源：http://www.xuanzx.com/163zuikgejn.html

================================================================================
来源：http://www.aibaodan.cn/163exizsuzf.html

[C01] 定义函数
来源：http://www.xuanzx.com/163rqesuvxe.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ffrldqit.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rntqsktg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ddjcodos.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rbcxwelw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wheyvlbo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163svncyour.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163nqdqbqje.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pfzcatrp.html

[C02] 默认参数
来源：http://www.sxryk.cn/163nmpllhsn.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163cdfjtwqv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163vveezqlf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163atfatkcs.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163rgmvcgqz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163xxwjydju.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ljdbdljl.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163btvxxtor.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163fqebtbgg.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163wmkavwiv.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ntnrrugw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ugvcyvtn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ishaxbos.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ohrjhrbp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163tvlbzeeh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kiqpytxp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ibmtywxu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163jupadwqx.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163mueszisc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163vpxnjozs.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ohzwfaqm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wsgwdvoa.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163wkjhwtbp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163lzegmkbx.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163rncuvucu.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zzcysopr.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163adgahxrp.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163qfzzkfii.html

Py:   return a, b
来源：http://www.sxryk.cn/163uinxgoxt.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163whcjqeuu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163mxavgtni.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163penmqhua.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163nrrpieok.html

Go:   return a, b
来源：http://www.aibaodan.cn/163neirbbql.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163rloweban.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163dogadpxa.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163zeuzvqkv.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163vxuzaakv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163cbpzvyyx.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163vqindmro.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163qlowoflx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163vwbwfsna.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163qjerpkpz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163obcstaam.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ljqepypc.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163skaumlsm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163fymyzoks.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163otriovke.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ehsviupa.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163honmjidn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163sqxnqyme.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163rqcufjsx.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163amltxivz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163euiuawke.html

[C08] 闭包
来源：http://www.sxryk.cn/163zscexbro.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163pydyctcr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xufgmghf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kkkpvvym.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bvlathtw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163lylwpxpw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163gfqfxsva.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163oasioimo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163clmrzmoz.html

[C09] 递归
来源：http://www.aibaodan.cn/163hyzfgrrv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163egaaiueh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163edfmjxrx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163copquyuf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ylkhbngn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163uspcflmn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163zlabyfzk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163hctwielr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ujixrpqp.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ulqrihgb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hdhujaly.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163dtannnsk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163cnfwsvtd.html

TS:   同 JS
来源：http://www.xuanzx.com/163wqfimqkh.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163gotwkvsm.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163xutwwmun.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163koofonig.html

C#:   块级作用域
来源：http://www.xuanzx.com/163xubgrqji.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163cpylgbom.html

Py:   from module import func
来源：http://www.aibaodan.cn/163qkrsoive.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163frdnpecl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163iljrzzcc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163fmrbscen.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163thghqlax.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163nscwqnaz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163tdkaculy.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163iwnjlzim.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163nwupzvjr.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163cxyxnnfi.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163dpyyamac.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kctmhkkq.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163amtocuxu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163lvpsbhks.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163onoyczeg.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163spsqgadc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163hreoczht.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163shpuemle.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163psehhupz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163murfkchp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163avopxtyk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163hryjwrtm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hkdkvtrn.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163thezqeaq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163kcjjbwgn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163zermtpnl.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ivmmhccr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163qpeoxtql.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163setzspsp.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163qvclrwbf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163pmgcuplz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163lpjdhryl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163pcuhowxy.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163euvepefc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163gqenoqih.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163qksnqenu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163pfocgmex.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163lhuhlemd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163iaijjwjy.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163nexbelro.html

Java: // 无解构
来源：http://www.xuanzx.com/163znbvvssu.html

Go:   // 无解构
来源：http://www.sxryk.cn/163lgnwskkm.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163agmurzmp.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163bdwxfrzr.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163oqyrkfzj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163clcodcgo.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163cnnmofgr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163gmyjmeys.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ajulvyls.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163cwkkpdfb.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xydkbrnl.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163bzdgawus.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163akfvajrb.html

================================================================================
来源：http://www.xuanzx.com/163uqurpapc.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ifloclym.html

================================================================================
来源：http://www.sxryk.cn/163gddiyevs.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163dcbnmprb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163wsernlny.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163tgatuzsh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163xbluvxwu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163nbfcsmen.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163knntehkw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163afzztakv.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163rsvhmaxi.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163vbjdjzkl.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163fetmlbcn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163sqosbpsc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ljefzqmt.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163hmddydvm.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163neozotxz.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163wvrzngct.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163tocendnl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163mhwbdnan.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163vxeuzipp.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163frebcpxn.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163mgxqeixn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163pvlvotip.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163lwaxkoqo.html


<!-- 参考信息 -->