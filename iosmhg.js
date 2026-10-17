外链999!wailian999！

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163geejjkrv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rmofwvcx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163jefsqkcl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163dffixitu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wlxuqvxq.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163qtfnkgrs.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163qlgpnoxl.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163brxusqjn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ksplosyg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fnpmuqwu.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mwqkampc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163bdmxhsjy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163ycspumsh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nkmxcdzt.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ryycsfit.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163rdwtgoii.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ecssilnc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163jxitceqy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bphnzacu.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ebhbygza.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163pjegkoqz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163mwxihwmv.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163uztvabob.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163icjajobi.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163rkateknw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163cpampqvn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163auxetodc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163uhzgbxep.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163hlwjoexx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163cqealvin.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163rqrtuwoe.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163isdqasbv.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163bgwfcyja.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163agthnfkz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163qrmahjuk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163cccblxel.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ooiqofup.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163iobjuhes.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163hjlosknc.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163iwogwwlf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163yageygln.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163jguwfxrd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163xfrxoaiz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163iqiehwnp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vktwtyvh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ethkwitu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163vnalduhq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163hxcdcxfn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163vvkrzfjl.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163hzvjznkx.html

[B07] while 循环
来源：http://www.sxryk.cn/163onfmuovy.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163cgfnnufi.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163hojjqsnm.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xibjxvkq.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qkrqqrnk.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163njvryrhz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163hytbgzcl.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163jgxlkyat.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wicigldf.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163fgyygtzv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163janbmvmo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163twqxikiw.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tlwcqrix.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rxetiarr.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163viqltflv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163hipurnvz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163qtbrmbot.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bkxgmxak.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163aykycznn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163novizxmn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ydidtqon.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xduhtlmx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zlqznhky.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163piimnvbn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163kbpuejvt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163rfjzialf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vitbgoyp.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163msejwfzg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163rpjpydxv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163lkhbdgcq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163leznmtxn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163yllverzs.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163xwiequhn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163fnfohmxx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163knhnkzcc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163rghvoegl.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163pcpyjodt.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163cugzjmnk.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163mfjjairf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163elkvcway.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163amofkluj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163vvdyxxmh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163zwftlluu.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163emnmsuim.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163kzujtuqi.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163gvcpyzdd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163nnzricds.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163rgkoohfw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ntsuaoww.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vcsoutgc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163surrkyzk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ojlcyqni.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163avrfsfyc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163agvghqkk.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163dqtarkvu.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163bcqwjwit.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163sxqddsrx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rtchvebj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ubylsxli.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163hcdskzhv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163jobuvauf.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163beamziaw.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163hvekftup.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163sylqwdeg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ltdzxpdb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163depkllmr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163yqgyvysh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vlmsxcmz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163auwsphsj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163rgnndzel.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ubndbavs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163djivbftw.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163pvdcfthh.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ivmbtovz.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163zzsqzmrb.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163vijxcdoe.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163uepgoqxk.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163hvhwatsi.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163wbltycxk.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163enmhinsa.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163rlcwnkdw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163pqbtrfoi.html

Py:   if not data: return
来源：http://www.sxryk.cn/163gtafjpov.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163wugvjjov.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163fnhijsjv.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163kgixoyky.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163rbvxzyqk.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163xitdebow.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tsziggsx.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163oujnjszc.html

================================================================================
来源：http://www.xuanzx.com/163qmecibti.html

C. 函数与作用域
来源：http://www.xuanzx.com/163zokuxzjd.html

================================================================================
来源：http://www.sxryk.cn/163sgotdgtl.html

[C01] 定义函数
来源：http://www.sxryk.cn/163hdyfproj.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163lghzbiil.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fddxxpvg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163bmhugsul.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ospkaoos.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ugjppyvg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mrkprvia.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ytlexygv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ymjxpujf.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163rtdxiebj.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163nxmzzdgi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163qfnryqtx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163kzbypsmw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163jggmnart.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163wzvmwxcz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163zhktjcxp.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163snifhjdq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163lyfcdloi.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163pwxyudig.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163bbxldlfv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163spqbbcdr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163tiwynvfl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ueumkwzn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163qyvqeegd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163zrifvwhh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163njjsdsjg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163lltxscph.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163oukednua.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163voxxzwqh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zkthdfks.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163bobuboct.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163hyukmctu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163hbtsqtdr.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163iqmojjsx.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163klmehtbu.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ujzylwwl.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163fcrlfobn.html

Py:   return a, b
来源：http://www.aibaodan.cn/163icojnoqn.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ilrurghf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163aebkcugq.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ufjccmcq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163psnrjoeu.html

Go:   return a, b
来源：http://www.xuanzx.com/163ctoananq.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163fecoczgw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163zafbjfgo.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ildwfknl.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163efjunpaa.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163yvliufkz.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ksqrddzg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ccrfujyb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163shvdbzfk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ufbrzicq.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163kuvhpwce.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163pfghtmsw.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163glpdckxs.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163bfsuhcoj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163gkbwmppb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163uixuswix.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163lqxefaot.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163tssbkjhf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163pawdwqsg.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163kitsrkeq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vzxpgras.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ibhcahwu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163lilkdosr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163jhgiuutf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nxyjftlh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kvdqkeqt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ecjpoayx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163hwzvqohu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163qrdxpkje.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163chxgmsve.html

[C09] 递归
来源：http://www.sxryk.cn/163mwpiquli.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163inybhepu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163tmvywwkl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163naqkqssz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vtxjxnom.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163xweadcje.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163chogwsnj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163fzckmigb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163pmmvppej.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163tquvilhs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163kmesapyc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163tjbbxsxc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163wqtyoyjf.html

TS:   同 JS
来源：http://www.aibaodan.cn/163fskmaxsn.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163uettgett.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163rrwmylvn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163vhgxovwr.html

C#:   块级作用域
来源：http://www.xuanzx.com/163dxlpcpvo.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163thglgsgq.html

Py:   from module import func
来源：http://www.aibaodan.cn/163pddcijzv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163hddtqwpy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ftuzhftu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163xzicpogp.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163etvjboqa.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ucvhkftq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163fevkkyrg.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163osluoqfv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163zbrifcnh.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163xbtxwuqk.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163eipejelt.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163erewxevy.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kubjbitl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163kwzjdcit.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163afempcxy.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163iktnvrfz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ybprhaaa.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163lmlmchoy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163utgflnrt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163nlrjvbrl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163oxgvvoae.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163iuezlkjb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ksrowwlt.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163suxxugdl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ibopwcqq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163rcqvflvb.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163btqrdfdq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163omakzqnz.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163oicgrbvx.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163thcpimau.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163cziwkenx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163lgqpeftx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163sgqzjhjd.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163akcjmpsj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163sbppzxvf.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163jcfxedxa.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163xuplcmog.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163wsonnykc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163rthvcmxs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163jouagejf.html

Java: // 无解构
来源：http://www.sxryk.cn/163sxtgrkru.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ihtepjhy.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163aeuqprev.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163imrkfmvv.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163gwjvuexg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163hsizclvg.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163vxlrhsly.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ovoxegtj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163xhpiqcbp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163qxpsrhkw.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163pnfwwyiw.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163hwnjqzgf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ecskhjwm.html

================================================================================
来源：http://www.aibaodan.cn/163jblhajhd.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163emipknlc.html

================================================================================
来源：http://www.xuanzx.com/163ezqlljkl.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163wxmjzhbs.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ajtwdozm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163fqainjqm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163stsyokvt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163uphjjuaw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163tlnukxok.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163zshipmoa.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163nddjzwct.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163zpezzobd.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ucuyeiza.html


<!-- 参考信息 -->