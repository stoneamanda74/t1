外链999!wailian999！

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163zvnwufwn.html

================================================================================
来源：http://www.sxryk.cn/163hcsisfpx.html

B. 流程控制
来源：http://www.sxryk.cn/163jgzpdqxg.html

================================================================================
来源：http://www.sxryk.cn/163fedodqfy.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163etxeghzj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163canigmme.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163cdfhqkfn.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lecdrlhs.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gaimrpwb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163euurnvye.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163cklqevvy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163pgtppmav.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wdaxxyun.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163lejmxntz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163wicigbsd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163nxrvkrfm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rcrkcgcd.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jqwmgjty.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pkfkgtpu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163wsixknjl.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163dbhheomh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dnpawejv.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163folsuhpn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163tknsisnj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163wsgcsoxc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163tndbxxyr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163briwsxqp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163qhcilsir.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ijwmncym.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163twfpesxi.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163mhfkcpvv.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163cjimgukc.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163synivwtn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163aumorjnq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163tynwnmqb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lerimmwf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163vsfixxul.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163iribrwxc.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163hvwzvjle.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163bdnskygq.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163usfhtglz.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163lbwzlcvj.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163zskjvluz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rbitlocb.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163umjcqhuf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163islzwulc.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163skqatjor.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163cvyxxzco.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ykhbdlzp.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163sdwfpamf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163wrmswvrg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163wcbyjacs.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qrvwdffg.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ocacblxx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163xwurhxct.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163yjkrhhxo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163zynuhvyg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163sgnkotbg.html

[B07] while 循环
来源：http://www.xuanzx.com/163azsxzwrc.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163gwgewiru.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163klzqvmrs.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pvarsajp.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tedbovey.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xzeakcdu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163hpsgsura.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163zyweakvr.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uelbfaac.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163xmmoeyux.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163iqnpyaqx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163lvhtmunp.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bllftwti.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hvstznnt.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bjordcno.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163vvkrfwij.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163bjyzvsgb.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163iqtaqdlb.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163enujsbfm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163xrkukfio.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163utyvsgaj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nrmzlwle.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163omhdzpkz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kzfnnxwf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163pwczcjuw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163qjpgpawa.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mtyhfznl.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163eyxhidsk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163xnibfgbx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163hhrcjtav.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163gwamagux.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163txotwfyy.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163nvqniwpy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163hrlcbynr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163qvflaoux.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163owpcrpta.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163slshafpi.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163lxofmifh.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163futwjjzd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fdbmieyv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lfbzouck.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163npsmpsxh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163qnzypfto.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163rcqdqilt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163vwroitbk.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163cqvvdccq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163bupjbgzk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163nfejsdgf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vysirotw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163knjtbpnq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bbxnzgvy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ylsshvwg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163mltljfrm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163grqlcsly.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163dkebxqug.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163njgkcxww.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163gimdtqrf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zjghvlzj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xjwpnotg.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163vjdjcnxp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163nufiaoeb.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ddtftewq.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163iaugqrrj.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163kevfojww.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163sebewndr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163godrhurt.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ynlkiiwp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fgsqpdvu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163nqzonzrg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163uyfbxwit.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163hkozvwbd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163emwbrsow.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163lvhnekvg.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163sjyaeidr.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163hhyglkvj.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163fozxoawe.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163shyiudyz.html

Java: a && b || !c
来源：http://www.xuanzx.com/163xqekwdac.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163czcgzpbe.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163mezbgcrd.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ljwduoah.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163wrfrzwly.html

Py:   if not data: return
来源：http://www.sxryk.cn/163hkvkracp.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163rkfupaol.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ycotllnj.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163nzfgsgvy.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163jkevvsts.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163mdnctjhj.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ncqtexao.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163vngqcrvj.html

================================================================================
来源：http://www.xuanzx.com/163nlpthudy.html

C. 函数与作用域
来源：http://www.sxryk.cn/163nvmlvnrt.html

================================================================================
来源：http://www.aibaodan.cn/163cbxdzrxl.html

[C01] 定义函数
来源：http://www.sxryk.cn/163aalolfli.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163dnjsysxz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bjkfdyyl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163etkxjjyz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rmjsrszy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tfsxsjmj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163yikyqqop.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163rrcbwype.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gguepsmd.html

[C02] 默认参数
来源：http://www.sxryk.cn/163rerucuvz.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163kwrpaxpd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163prqznmql.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163irrbjfnq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163tluosemt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163mevyedwg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163baltllil.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rfykyqmy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163jbabpumi.html

[C03] 可变参数
来源：http://www.xuanzx.com/163wzajbfyz.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163rsvuduev.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163xrrxzenp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qmpcrlen.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163piovgtlb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163wjnawhup.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163qnfmekzf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fcyvdcgn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163tclmlbwy.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163uexdefrg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163maqqowql.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163wfylyxld.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163jmhjpmsc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ednhfxvg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163cxcvzoav.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163lpvrxwdb.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cdepfysc.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fheffmml.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163zpaggzcq.html

Py:   return a, b
来源：http://www.sxryk.cn/163udtylagz.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163nyfmoozv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163qnsqkvmf.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163aoqxpllb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163hejudzcg.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ueyuiunz.html

Ruby: return a, b
来源：http://www.sxryk.cn/163mipkuyvw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163mezmkgfk.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ecvcwmsw.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163tlpmoxlk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163htvjadjk.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163zlnscapx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163xoleohey.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163movyaqrk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163zkrgespy.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163oqqntqmp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163pvlihzly.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163laokytpv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163djhnshpy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163nydsqsyt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163kciyskix.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163bjwiokox.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163dwxlzyyg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163qdfgzlqb.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163adqlwzhj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163laiyjhjm.html

[C08] 闭包
来源：http://www.sxryk.cn/163beyprdmt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ltoqtvst.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163asojyihh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163thbladvj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bpsggwgf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163nvjahgkf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163esgdouvi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163jgudgvst.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uxbuwrzn.html

[C09] 递归
来源：http://www.sxryk.cn/163eecdtkbo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163gmhherio.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163knyzfrce.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ldwolnwm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163pxihuvbd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163csqxkpgr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163gqcadeor.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163monunkyf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163bvygjkqm.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163uwtwnqiw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163zsjploea.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163wahjtcgo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163yyxntqsz.html

TS:   同 JS
来源：http://www.xuanzx.com/163rplgpwvk.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ezyhbnyz.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nfeadmhj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163rigkmafk.html

C#:   块级作用域
来源：http://www.sxryk.cn/163trngrowu.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163tzfjkzii.html

Py:   from module import func
来源：http://www.xuanzx.com/163ghpcalqy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163pdtifqzg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163qgqcjmoc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163nlcgbnpo.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163msascjod.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163kkvdnxad.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163hcnmbjqn.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163fcsotrtk.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163jauxijfi.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163scycjmff.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ujpdyqhr.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gdydlwnp.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ewsfumxl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163jvecqrtg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163txwokaih.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163zrduvhee.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163mmpuzlyj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163apwaegpi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163txcneuaq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163yasvomnv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ygwlizum.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qathrosd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cobrjdif.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163rafambts.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163akyuifyw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163xoagbadc.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ahzufgga.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163nticfewy.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163kpgieqoq.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163bxvzkouu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ouaiktnf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ufdhxrae.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163texulsjx.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163maxtoxvq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163eeoharlk.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163lzrcgseh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163wgypmxcl.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163whigkxtr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163pdppitha.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163rmbcmbkm.html

Java: // 无解构
来源：http://www.xuanzx.com/163ehwobjut.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163fvepskvx.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163tuidnknt.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163adaazrsi.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163mfizxtch.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163jshhmqzj.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163pptpmmoe.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163nlvnaeav.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163gepyndpb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163octqprrk.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163qdaxfapu.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163mawxflok.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163pyxlndzk.html

================================================================================
来源：http://www.aibaodan.cn/163njtjkrqz.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163gcexcttz.html

================================================================================
来源：http://www.sxryk.cn/163sqsfscma.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163czwzukah.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163bjnndmyp.html


<!-- 参考信息 -->