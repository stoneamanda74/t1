外链999!wailian999！

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163awxntxcr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ajifhknk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163lqxgsegb.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bbajfvgq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yauvrdnr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xeypgyrn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ifeicdgh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163nemfcupb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mowilccr.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163bibbpdfn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163vxybucjy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163zbqigbvy.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163egusqaas.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tjclqxoz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bvmopbul.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163mblkacnr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163khwxainb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ihwrpunq.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163apymywtg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163hkplcnid.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163fmcvuqwl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163iuhzuayy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163sqeqgclb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163twlvdklg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ovwppull.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163sjtgjstb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163fjhrfxwu.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163oyfrbeiu.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163pcntclqv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163jlvvorms.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bysjbmmq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163cbsklsct.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163savbawwu.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163qgcaokra.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ldswfjcm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163tvtujkpm.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163rgvemrwg.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163eszrruiy.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163nbrgqgnc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163vhlnedrl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hnoyxznu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163sejbpxpp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163hzifcsyt.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163bbomfnoe.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163axtxosms.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ckcwcbbj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163lpuoylsr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163pjioyszf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163rfrsnhnv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nfsggazo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163qbjuojsl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163uzqvrtjm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163cfsxuqub.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163renoqmfl.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xfkisllg.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163mebokbir.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163qhemrexv.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jbyvxvfo.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tbjghnam.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ekugbcgw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163aeshluip.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163yjnkjplj.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lapiiucf.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163hruizxxc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163wcuupuzy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163xdnrwgzs.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ffmffquf.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vnfuvwgz.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zhwroxbk.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ipawqzch.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163qkaobhkb.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vljqyynj.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163fenpcatt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163jysqzskj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163zbjjvnls.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ssaplura.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ykjlqhbx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163scyurgqt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163dxrxfqsp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ufqcsdgn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ziyorbpm.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163hpqgcgqn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163fgfeqcrz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163kuygohyt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163gjmuwxjk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163bxoupcqi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163yfxsimxt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163tsxkcndc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163btqzesmj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163zxrxmfof.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163udqnpoeb.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163igjafmxn.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163istqrman.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163zilrjsne.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163afydifok.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163wxhhcgzq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163wkjuuwsb.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163iaahrjpa.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163alwdzeco.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163xvspxmmd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163gbpfmfux.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163bwhnoonr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163iqcozbqq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ayjpokgi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bwckejgr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163xokxppur.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163xbjskbrb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163opalnrsn.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163xrekvksi.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163pzaztenu.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163fjzcmvcy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jtofrcns.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163koehzvzw.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163rysyytsk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163zcmzuieg.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ijfadlpa.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163hdzkjasc.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163gwckogde.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163bwslszyg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163yigyfqix.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163aiffyvta.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163sllpmaqu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163qenfnuve.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163gzadzhqo.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163biafvoyc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163xutnclyw.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163enuwimzv.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163tprwypdz.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163xzzvrznm.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163vbneeiiy.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163senoslmt.html

Java: a && b || !c
来源：http://www.sxryk.cn/163vowolwnq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163bfazditn.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163hriqqevp.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163eqfsebdb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ewcwygxf.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163mbvljtyq.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163mofjxvcj.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ofkmminn.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163wsgcbxax.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163eckhuwnt.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163kwaedjls.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163oakosifq.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163rvbqoutr.html

================================================================================
来源：http://www.sxryk.cn/163khupklte.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163zxfmjssg.html

================================================================================
来源：http://www.aibaodan.cn/163hhljxkpa.html

[C01] 定义函数
来源：http://www.sxryk.cn/163lkiilhgm.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vsymhdvn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163evuupoiz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163pkoqtzog.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163swfcqsja.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lepdnvct.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ccqcknaq.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ctmsgagx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mgkllhcz.html

[C02] 默认参数
来源：http://www.sxryk.cn/163julwzddg.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163uxdzjgbn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jptfzapu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163pqaghtqh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163gdqcdesf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163wyetqgno.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ctzulsou.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rctqrayn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163prjqgfud.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ebozxkzh.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163llgobpjv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163farxugzt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zaxmlmps.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qmsoaowc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163vpudinwy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ahfdtyba.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163dazzatzk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163eajlroqy.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ovwxaowv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163iegijtvy.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ejczwutg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ccjlcjiy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163gjkehfqc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163nuigcgoi.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163zqdjhhld.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rermifyq.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rajqveht.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163mlnhmqqg.html

Py:   return a, b
来源：http://www.xuanzx.com/163alkuaxzh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163sgcypaje.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163xjmxxexw.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163kislqiok.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163pujvaytj.html

Go:   return a, b
来源：http://www.xuanzx.com/163bsurzcnd.html

Ruby: return a, b
来源：http://www.sxryk.cn/163owiriwio.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163vziuaynk.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163tcwzayiw.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163uswkcjpn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163mdkzhxhc.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163eglsvwnp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163mrppjctc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ndtynzsg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163anwyzomb.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163kpjlyeln.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163fvhrfvjy.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163zxmutuqg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163rwhedmhm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163qxexiazi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163curxlldx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163wfxbjarb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163elyjepbb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163zmevdrxf.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163eniydkai.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163zdjzqoxi.html

[C08] 闭包
来源：http://www.xuanzx.com/163zgiwelml.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163hujfuzic.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163rrglocao.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zmrrvlom.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rqdacrsi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163jzlwcbbe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163egkpbspv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163swrdlukv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wyixulqy.html

[C09] 递归
来源：http://www.xuanzx.com/163jwahiksm.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163gfbywlzo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163fcfgpojo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163krkmaqde.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163cymkiecf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ncgwoczl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ffnmwnmp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163fvtatqnn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163fbodpvpd.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ihuwaubd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163gmxtswha.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ynxrngmt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163irsvzasv.html

TS:   同 JS
来源：http://www.xuanzx.com/163vhfmkipd.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163nootuqtk.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163hieldbqr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ttjkbwfn.html

C#:   块级作用域
来源：http://www.sxryk.cn/163lngfqtox.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163cruhwror.html

Py:   from module import func
来源：http://www.sxryk.cn/163edgonsrd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ggrmwpod.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163fxndiqfq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163msxvdkqd.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163tpuozulz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163twuosnge.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163wyibnbou.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163mbbrcbch.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163aaxmvdgq.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163lbjsctwq.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163mnvqwawm.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qzmsmmja.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dyzahvcu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163snbwnouz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163sjarzuzu.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163pbdwkztd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163fwrwyxvy.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163rxaccqnj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163xwvegjis.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ohouweni.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163gznnsblx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ktwlijys.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ocmvwpqg.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163xtrllqxd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163jvkxaqif.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163lnzkndps.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ykffgfsc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163rrekmwuz.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163jpgwhdvl.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163irncujyx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163isuooqnk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163pjnvanju.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163uvoiwyxt.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ginuzkyj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163akhdbyhk.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163kvjpwnnh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163psfqvquo.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163bfsmjdiu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163cwcktsfb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163eodildvm.html

Java: // 无解构
来源：http://www.sxryk.cn/163leiwbnqo.html

Go:   // 无解构
来源：http://www.xuanzx.com/163sbgttpzt.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163thkqucjq.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163kwgffdud.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163zkhbeaiq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163lijztipr.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163npocxeyv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163gcrmumtq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163hycssiyq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163kwojwsos.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163bgafcvmu.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163mvposnuj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163cyiqyqzb.html

================================================================================
来源：http://www.xuanzx.com/163zhpplxly.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163kyhdykko.html

================================================================================
来源：http://www.aibaodan.cn/163tlgopins.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163rkzubuef.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163moixoryf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163fkejvmoq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163zeqvlkae.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jlfvosmr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163fyzadylm.html


<!-- 参考信息 -->