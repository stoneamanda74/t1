外链999!wailian999！

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kjlcyqjx.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163japdjnbt.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163vjcabvqz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163mukguaaj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gjfizazn.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163poaaurdh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qpjshyfi.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163yablfxpp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163kxwlfclw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163glertthu.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163eubwvtnq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163fzfywfcf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163kgulumpq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fgrmpmqf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ayslfkjl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163sijylgak.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163njpgzwnn.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163hilddqis.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163byeqzlww.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163rhnvnask.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163fjgkqaje.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163edfafzfu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gcmymvps.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pglbfevz.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163akbtssbc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163gfpgdxic.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163towxqals.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163fnactiva.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163pcbdqohf.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163awhwzmyw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163hjmeiunj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rajaddzw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163itpsosjh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163dlmznzag.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163gpuktihb.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163bymddyuj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163gunnwrvi.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ppsvsomr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163jarvjnky.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163tdzpeeid.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ppvbhmqa.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163fgaxdmix.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ooqnmzmc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163byulzbll.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163pkkaorvv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163nofnuagq.html

[B07] while 循环
来源：http://www.sxryk.cn/163xbormjxa.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163oilverzx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163jlzlythp.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nslykldw.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vneymvkc.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lbqufaun.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163myfkpxry.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ilnksnwm.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ecrtcnde.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163anououhs.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163lourteih.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163pkquwtyn.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mxxybdye.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163viidekoq.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gptvdxqd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163koyrxjjc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163bmapazlb.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ejyzfnpm.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163aeqozrzf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163iykuprpc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163smxlxjfa.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zfsqmjjt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mvpuytzm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uongxcyb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163fyxqpxff.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163cmmfycgw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tyvpdzwm.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163szgafctr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163bvhkeszz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163fuhexftd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163hzlaokgs.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163syqzdliz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163jmdrxslx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163pdxbtesh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163eepcfrha.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163zivpkoqb.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163btbealux.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163sjsflbjz.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163lpjpvvcm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dwevurku.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163gslukaeh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163shvlqrll.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163phsmfymf.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163swxpikhg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163wryujcax.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ozmlzahb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163rgzgqbvx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163tolwzdjz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rietznsn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vqofoaaa.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163izsqbzlo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163klaxtnml.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163imgwfvrn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163kqibrcxk.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163hbgtmxrj.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163zinaqycs.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ncyjmxzi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163njuhjlbr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163jfwspclb.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163binlkuxt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163chzmnnuo.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163celhjhja.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163oqzqrvvs.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163rpoiaihh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163mhznzqqx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163remrsmrr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163szkfrazw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163whusbvqp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163fwuapdur.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163yumljqdv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163bqzydvpd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163pedolsjk.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ymkqbwqj.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ahemzpeo.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163qyuxfivn.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163tygvoyif.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163cmwpypdc.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163pqunwzbt.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163mqihvlgs.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163tcswfysh.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ilnfuoqk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163xrwebbmf.html

Py:   if not data: return
来源：http://www.xuanzx.com/163nwfizjhf.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163xuckdbze.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163vdxlxqdg.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163kcftmvsd.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163kcalsghp.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163hbhnefgu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163hlqyfvqx.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163xtnwxlxl.html

================================================================================
来源：http://www.sxryk.cn/163rhksuofq.html

C. 函数与作用域
来源：http://www.sxryk.cn/163tbfpldip.html

================================================================================
来源：http://www.xuanzx.com/163iolpymwy.html

[C01] 定义函数
来源：http://www.sxryk.cn/163bucrnvxw.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163okpazfiw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163htdeyhgn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163kqgvzyun.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ckfxwnuw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zckextah.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163igpvkqpv.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163kazbascy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vofnbsom.html

[C02] 默认参数
来源：http://www.xuanzx.com/163wryirzqg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163srjsaiws.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163nbfodopu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163nslzkyqh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163wxqmifba.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163orpdqvyf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163mrsbxjci.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163gopfmnjs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163gtprxbol.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163pexpuuoi.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163lotggmff.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163dzldkqit.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lxmcqxak.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163thngvbfg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163qldhoaer.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xaqcqlen.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163pmfazwbe.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163bqqofjjf.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163pjgaymot.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163frfsjgtm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ctumkmsy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xuugkhoc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163nnrfmdki.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ltkrwijm.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163wqucsjmg.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fgrbkeyf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163aeibkqbq.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163xgjgndpf.html

Py:   return a, b
来源：http://www.sxryk.cn/163kiazexfx.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163jtufppvv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163vzlevboi.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163humnukpu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163satncbli.html

Go:   return a, b
来源：http://www.xuanzx.com/163mvfvhiuw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163tlgxybra.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163tkvotsft.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163kxhltgcm.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163vqjxqniw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163rotxudlk.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163wyouulkp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163mjxjpxxy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163kfbaeted.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163goewnddd.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163iopdimwi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163xkfpgpus.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163osnjpcaw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163zplwlnem.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ipbuyrlb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163pqaclriu.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163fjgfdzrf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ujlxqasm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163zrlllmtq.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163rgmmgrha.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163oprmkwfo.html

[C08] 闭包
来源：http://www.aibaodan.cn/163gvbzvmer.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ycvgbaxg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ecrjiltg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gtojbaxu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mmqvymer.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163orotnbji.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163kgoawvea.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163hvhysxng.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hidxwlqk.html

[C09] 递归
来源：http://www.xuanzx.com/163uyijloef.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163zbtitite.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163gyonhgit.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dicgnxkv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163czgkpqct.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163sndafyyw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163lyaazlld.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163zmzvpeos.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163aghbbsww.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163irktvxks.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163jlxgxcoq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163pfijgqjn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163enpccdrn.html

TS:   同 JS
来源：http://www.xuanzx.com/163jcbbkikl.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163udjxvskh.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163rgjqebyt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163tuaqxwkq.html

C#:   块级作用域
来源：http://www.sxryk.cn/163bjgmjelr.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ifarpanz.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ovwaehad.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ichriude.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163nybmjxkq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163uargkmns.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163notwixrr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163eqhmyvvn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163vsfvaamy.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163vyaaueij.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163asghswby.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163tysdwfgh.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163jeziolnb.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dxmfqskl.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dqfgpjyq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163vmvdjvcn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163bguuftgh.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163gudxjtkh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163xhmxmzua.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163qicioosf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mxkeayrt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tfnsfosq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163uvtasogu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163srtrlnjq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163siierfxd.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163guoyeshs.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163wunhqyaj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163eantqeof.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163qrofhyqr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ofmnclmt.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163fceqondi.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163txapsaqk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163eypctpxa.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163umswavvb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163geotdqof.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163yahnjnpu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163jtrnorfy.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163nxvfagjn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163kfmbiboe.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163oahhqvgx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163asdhmenc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dxpzoodh.html

Java: // 无解构
来源：http://www.aibaodan.cn/163iwrptnay.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163virdfavc.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ngafpheb.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163slbhhmqg.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163dndsbngo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163yovgvhpn.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163vnupwhet.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163hcldnzct.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163vklqiwbt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163elchnqdz.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163vvlihewl.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163gjtepaiq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163kajvhhcv.html

================================================================================
来源：http://www.xuanzx.com/163zuyoisma.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ngzisuwg.html

================================================================================
来源：http://www.sxryk.cn/163tdhwfter.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163hdvbwola.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163fokqvyqe.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163zxybrbee.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163lmvixkma.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163lkwzthke.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163zujbyfib.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163quuvesop.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163vufpkckn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163sxjqbmda.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163crxcbwwd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163bhxeyacn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163carwgdvb.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163bbcfcdog.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ndscderc.html


<!-- 参考信息 -->