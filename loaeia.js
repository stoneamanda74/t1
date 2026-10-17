外链999!wailian999！

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163xtwtrdfw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163byoemdxc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163jqxyftoj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163vzgpqrkn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163pawlunkq.html

================================================================================
来源：http://www.xuanzx.com/163nffbeqdn.html

B. 流程控制
来源：http://www.xuanzx.com/163oeggtqlj.html

================================================================================
来源：http://www.xuanzx.com/163eidqahfw.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ivhgjbow.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163kaqetadk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ihqkeivr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wpxpqdcg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lmpwudfb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ogxjhkbb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163hyaldmsm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163maobolfp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ldvyjppb.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163mpsektwb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163brieefkq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163dkkptwgn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bhtabnoi.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cjxwztpl.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zzdhyurc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163iocqkuat.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163kiiabxvi.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163worsjqsn.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163hywrkaes.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163dkzkvkrb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163oqbfwmhe.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163xlrcinwy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163kblxkrov.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163uonvevrk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163jsgcfcmc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163gqjoducd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163qlmgunwu.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163jsvvygzt.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163miappwfl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163twlffyvi.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163nvtaffdb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163aqmxinlc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163vzafphay.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163grigsxls.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163piwowgqj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163sahhnuyl.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163tyalqjrd.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ymowzwtd.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ndtibiwm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163oafbbftk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xskjhbny.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163dljskdwn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163siopvxch.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163mrxvisae.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163zzpnjzid.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163wcfpvzok.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163xsvmsphi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163babiwuvw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163tgyuvrue.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163cvyceyna.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163edxypxcn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163dnpepczk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163bpbwhyga.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163mgvqzasi.html

[B07] while 循环
来源：http://www.sxryk.cn/163yqahvrmr.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163xpqfntvn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163rowuavkc.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lvnmmnkr.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kejojdgq.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zdulvxuv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163cboesyep.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ubcwdymd.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163srzosayo.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163jlairlaj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163xxhvddrd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ynwucsyz.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vuifnaes.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fhtypqdz.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cwjsgglu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163vnvolubw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163nehlxyyp.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bczjkdhp.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ukcuvolu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163nfjrspqp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163xqegdeto.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kngdrfzz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163monzzcdt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pbymlimu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163xnuzflcu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163eabyailx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gqombazq.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163bnlynnye.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163pzzjqrtx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163duiemrqo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163pcufosva.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ttlwmghd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ipwmfwwk.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ztdkidul.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163mbtmrqom.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163tnpooopc.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ohzmzqss.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163gquxabib.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163txmclaxv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mpqlvfeo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163gwecbftn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163epxnmbhn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163moopuqix.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163httprucw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163bqytghrz.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163svaticfn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163wwqbodyk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163xpslxshg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ilkhjldq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163iunyubxz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vwlvoosz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163odzbvzyn.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163dxkptnlf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163orptnxel.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163qudbwaqu.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ejgrludu.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163mgvfmbes.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163lftnohjb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163nbddcdiw.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163jvesvvbg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163vbpvxufo.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163esfxzzcq.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163doosxzux.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163rrpgfqlu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163jlfzsnsr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163amutuxdp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ukvodhwo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cmttdbci.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163dgkbskki.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163bbabympf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163opnsvvmb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163gjlkeunn.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163uhetklec.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163rvcnewgm.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163cezbmvfv.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163hluxsptq.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163pztldwgc.html

Java: a && b || !c
来源：http://www.xuanzx.com/163lotcxtnv.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163irqrroxl.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163enhztchr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163yuvkqrzf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163oghszwwm.html

Py:   if not data: return
来源：http://www.sxryk.cn/163umjmrgyv.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163edkwnbfm.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163guohqzry.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163fkkutmdu.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163vtrdtkct.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163vnoxuzld.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163rcmhfxzi.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163xexftzuj.html

================================================================================
来源：http://www.aibaodan.cn/163jjkallfo.html

C. 函数与作用域
来源：http://www.xuanzx.com/163peywrayl.html

================================================================================
来源：http://www.xuanzx.com/163dyzxwqnn.html

[C01] 定义函数
来源：http://www.sxryk.cn/163zugdyuol.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163hvsckneh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xxnldqdr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163srcgaxde.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163cfhjcytf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gtdvidnm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163jxqhsngi.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163stgrvxop.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bnmmaqjd.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163mojngcbe.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163dbvwokju.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163hiqkqaue.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163xbhjehqi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163sfsufsll.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163owaopjkz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163chfekgxc.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ndokhzcr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163pltzwlxm.html

[C03] 可变参数
来源：http://www.xuanzx.com/163tzudmxoy.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163wyvdezct.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163djsntdrz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xjqdhdnf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nlycygyj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163iyosyswy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163zbbtwfqj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ltwzyapg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163jzfsxnoh.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163hrduhphg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163bqrdfaec.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163gmtvtltz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163eguxslhw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163yptljnhb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163xhfeldkc.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163vkvthmjd.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ngllthct.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mjfhnpbz.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163zitorqtl.html

Py:   return a, b
来源：http://www.xuanzx.com/163ekbtnret.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163sxyepqet.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163cxbaezwq.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163zsunfopc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163xmqctjpo.html

Go:   return a, b
来源：http://www.sxryk.cn/163jdlrybuf.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163lglrygvo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ojetrexx.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ycvnfqnn.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163oikateam.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163sqfxjqrv.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163bmvmbafc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163mpetyzus.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163oczniavo.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163rmelfipe.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163jiylvfow.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163rpdfwahk.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rzxxmdcs.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163oggafkah.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163edczsfch.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qhpdljfx.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163boltpfgu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163yyelmmhi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163uphcnqwc.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163jsnnrzpj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163qimtauvs.html

[C08] 闭包
来源：http://www.xuanzx.com/163swkigmbo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163rcaoczlm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163hpvvdofl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tkhpzknu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163orsacphw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163vvomhyol.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163swfcveyh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163dkaxuuom.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163klstrwjb.html

[C09] 递归
来源：http://www.aibaodan.cn/163jfgjpfly.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163rgwwjngp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163xhtjrpec.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qynilzkc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163anavfnki.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163xixlgvxs.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163iatnssjc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163qxowmtfo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163cabbcviy.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163cjitttwo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163tbrpfrht.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163mjjsaimf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163aeawgzpj.html

TS:   同 JS
来源：http://www.aibaodan.cn/163uvvpnghg.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163cfxwebea.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163leizujmt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163octxafmn.html

C#:   块级作用域
来源：http://www.sxryk.cn/163tmuohbpn.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163dbnlcqxf.html

Py:   from module import func
来源：http://www.xuanzx.com/163gxmqkddj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163rqpkabrb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163rdpirdmu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163zgbwhbyo.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163mmpqidvu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163oawrywcc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163asfowzyh.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163rpjvkrxl.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163fttmjhic.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163qczgyirs.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163nyyxlzmy.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xvgapftv.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vufgiemu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163fthxoqpl.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163nsulkhbh.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163wutpzvrt.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163oijszxfm.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ktimzsln.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163skzzciwi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163klpvmyib.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163bqvljsbi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pwucqczg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163eizvompp.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ffnbuhnh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163yjctyviu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ychortkb.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163damqbcir.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163fziiiefj.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163wblvcqai.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163jwbgshwn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163gmgluefg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163szzacgaf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ejqdfbzq.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163qdksfvwr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163kuvusfbi.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163mloyhwzi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163wpwdqfrl.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163wbgvihsf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163cmwxyieh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163reqnamhn.html

Java: // 无解构
来源：http://www.sxryk.cn/163fuuiwtmi.html

Go:   // 无解构
来源：http://www.xuanzx.com/163xekyrcfn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163raicmulp.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vwzbdwgk.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163kgfirqjq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ijhjwras.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163mggmpnzi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ozckznuq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163yltusway.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163rsdflgtf.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ejyjhfyc.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163xeywtcgp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163zzfkgqaq.html

================================================================================
来源：http://www.sxryk.cn/163wyuczyzu.html


<!-- 参考信息 -->