外链999!wailian999！

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163uzdulwhn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ezkgpjid.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163lfpnrwgo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yupepurt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163knsvcrii.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pyqnppmu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163aqlrjrhr.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163uvlrgpio.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vxeydjim.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163jnezunrn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163mfccilke.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163lkvcstzp.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fkamyuux.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rjxjnpac.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vywsopzb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163iaypfjnz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163rqqyxxii.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cossdjuo.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163alctyczx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163nupoypax.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163tfklamtl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163rvkeduva.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163owkadsxv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163qqmltmgm.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163nxqyvkaa.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163otwbemyh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163snaeqtyi.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163msaewjbg.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163cjujqoxy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ucbvjfhs.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gcvqyswf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163awndkiar.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163qclfxjal.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ldjvtztm.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163rvmwccwy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163umxyhdhz.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163yhfgflml.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163jmpsetvf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163yurkzdmb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163jlhlzhnw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163dnbjdozr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163fjbxyudg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163aflqiswo.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163dukpilbx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163evvafhpa.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163tzizqthf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163hzovsfje.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163enfekeoq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163wpijnumf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ezkfuqcp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163erjqwntw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163azdwpqge.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163gjxxjmfe.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163tprfbric.html

[B07] while 循环
来源：http://www.sxryk.cn/163kfeegpyo.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163dxqggqcw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163lhuoejiu.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163htunzypu.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jjckbofh.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163djwkkeic.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163issaoawl.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163txthnwtu.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kwmubdci.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163nvhvcpiw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163eaqimqxi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163fvusspdu.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cqipoafx.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zaspcfji.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163oocejzhx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163nbngmljr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163krrclzis.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wvsgvnow.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ncttdwhi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163pxchwnsx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163stvbssex.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163efakzzqq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bhpebbjt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kjbiigwh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ojscwtzv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163hgecalqw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163njtciqvr.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163oghzrccs.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163mvmrleww.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163srmmnjqg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163zcvzuomv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163jhvkcyfj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163jcoeyfjl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163xwgjxruj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163boytihae.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163huvbupud.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hpjtkyux.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163vialmpbz.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163txbruxey.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163pxkcekao.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163iatpvjns.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163qqnhshum.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163usqzzpti.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163cbsbwnmt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163gxfqdfgj.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163amusokfy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163mtwvgruo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163synucwye.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bjzhleip.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hanffohl.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gdqoylql.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ytblxyyj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163rmvmyjpj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qdddtlxn.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163nwmzysbh.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163qhqqmesc.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ihuzuxwk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163rfhippae.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163borkylqj.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163igjyifyq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163qgyawrvf.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vrmycnqv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163lorvlgkj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ijxgmoxa.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ctsihvdq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163gulsqkif.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zkykzerk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163jbjkyxvk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163dalliyld.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163dbdjfshn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163svxhiodg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163bgknlvoz.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163fjkrsyja.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163qpxcxund.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163flzgvdkw.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163lwthdrud.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163mbpdtiwb.html

Java: a && b || !c
来源：http://www.xuanzx.com/163rkonwsuw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163mppqueqs.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163uucujkjf.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163vcopbzin.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ljnhsqlj.html

Py:   if not data: return
来源：http://www.xuanzx.com/163cczcwofk.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ocsilmlm.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163wkvkrgmy.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163sjaekusj.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163lsmkgxra.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163xlfwqtmt.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163eflhaylo.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163mmbyjpwp.html

================================================================================
来源：http://www.sxryk.cn/163anqkmqah.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kkvjhnbj.html

================================================================================
来源：http://www.xuanzx.com/163qzbbhndb.html

[C01] 定义函数
来源：http://www.xuanzx.com/163uujqwexd.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vdbywvnt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tgifwfaw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ffffrzzj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qnwogyct.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hecrdocw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163bimyajru.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ksshqiyq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pqpvwrwq.html

[C02] 默认参数
来源：http://www.sxryk.cn/163uirjgamm.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ggibeowu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163rbsuuocx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163heyiqjag.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163pxyateeo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163agsoeuwz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163lxizimbm.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163zprooruw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163akvewrew.html

[C03] 可变参数
来源：http://www.xuanzx.com/163yncoxvjm.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163qwrtihzf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163gqsiezgs.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zkqnodhq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ewlsinkj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163sfzdobbh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163lacxtdan.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163bjolwvad.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163tgzrmtju.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163mhvddtdl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hzzdaznz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163urmxuarr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qopuhukk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163rahvywfy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163bgjzlggf.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qfvlgnsn.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mbgkzbsg.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lvoqtdok.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163lzjoklgy.html

Py:   return a, b
来源：http://www.aibaodan.cn/163bgqhxjsp.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163bptdwrkl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163lewpngpd.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163xgibnqzm.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163iuiklsgg.html

Go:   return a, b
来源：http://www.sxryk.cn/163biwemusr.html

Ruby: return a, b
来源：http://www.xuanzx.com/163oikmhjkh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163rqxcjaqe.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163qbtxlrrd.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163bkquwzpu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163dyufezuu.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163cvbqyyjx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vikbyfwr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163mtlrityp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163pilsjqca.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163odgaiveq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ezvnecbe.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163qdlfnjeq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163rhkifaod.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163lbtxanyh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163cdcdwame.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ootblzlj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163cutdeulh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163klcrauuv.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163fckcdhpu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163vppinkzy.html

[C08] 闭包
来源：http://www.xuanzx.com/163cgkagdnu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163onuvtzbo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163uafpclte.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uixunfov.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jcdtmnfl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163czbdohlu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ctkuebqz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163cudcbxxr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jyirogxo.html

[C09] 递归
来源：http://www.sxryk.cn/163haaexafl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163eyvjknmq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163engxuafn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163lwcxuhwf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tvarmpjj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163krgctxmm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163pjzypbhv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163szzljsbm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163uidrncyu.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163cyzfakfz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163qsuiocim.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163nppfbxho.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163hmtnifjo.html

TS:   同 JS
来源：http://www.sxryk.cn/163jbolembd.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163dbhfqxrm.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163zsrrxfbe.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163oywmmliz.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163gnpgtuda.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163hvgfuuoa.html

Py:   from module import func
来源：http://www.aibaodan.cn/163dwknyxtl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163lncxgmwg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163lfvbvbdy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163jpvwyxcf.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163chapyyjh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ghydbqiq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163dgltdwuf.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163yrjdzvpu.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163szmmqvih.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163pjbvhwzk.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163azmfghas.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qvhpells.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jhddrjuu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163gtwciiox.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163tbetcowu.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163lmykubnz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163bvvbrslk.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163mhzgzrcm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163hokpwvfc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xlukczjk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163dubhgjpl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163tyezecrh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qopymerf.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163jaurhofh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163yzbpitdg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163nixkqrbd.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mrgnzkvn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163upizchhv.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ulhwyeyh.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163slyfsbim.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163leazcjvu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163lizqegfl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163fkxgedgz.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163uliptnnt.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163gbbmgdec.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163eilpnomt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163drtzbbra.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ntmceevi.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zmtunxxl.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163fxnaiwcs.html

Java: // 无解构
来源：http://www.xuanzx.com/163uzphavlg.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ishthkkt.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163cvqmmicl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163zdmtdccm.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163cbhskwhm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163dittyykk.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163dnnksyye.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163fyhszzdu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163gxdtcncb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163guzkplde.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163fqconhxf.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163bqiaqxey.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163icbkwfvx.html

================================================================================
来源：http://www.sxryk.cn/163hcfhbewd.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163zlrknstl.html

================================================================================
来源：http://www.aibaodan.cn/163pmfohguf.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163fguzyeep.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163znmfhyhv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163fpohairf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163upmwyyws.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163jiijxcrx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163txbvwbri.html


<!-- 参考信息 -->