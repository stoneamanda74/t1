外链999!wailian999！

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163xuucbhkr.html

================================================================================
来源：http://www.aibaodan.cn/163xvolnaga.html

B. 流程控制
来源：http://www.sxryk.cn/163brvdnjod.html

================================================================================
来源：http://www.xuanzx.com/163amiqpuby.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163dlgyhweg.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163xijnneye.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163nagtdigf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jhlbrgdr.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zhpodbdn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fzilnqbp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163tkrxpdcs.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163altsfiug.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nbtxnrra.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163emtwidiv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163yayyqaop.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163lrauqpct.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gufhgtsp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ceqtxgbt.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kmvluadk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163yovpsiqt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163lshfucbq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bjzhejcx.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163mpmkkaus.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163xzkpthwf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163dvryjdxj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163yhcofouo.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163puwmgoac.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163xsbxftaz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163dsvheput.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ppzcjclu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163apoidprg.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163tnlgcdma.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163uoukwqii.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163hmbsxsoc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163imlxcgoc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163laiuzekt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163ecckxkpo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163uekruobe.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163diafxsev.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163mpuipiat.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163yxiinxhb.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163qsrlwzzf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ulawzuwc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jujecaku.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ibwfnhyx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163jdfxsnit.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163khrcrewt.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163wtncnhqb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163spajtare.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163pslnaxlg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163heuaueru.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163hqktizgj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163srguxsfs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163zlyvlqeh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163srskhvxx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163vcnxraos.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163oivshoam.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163drgfbncz.html

[B07] while 循环
来源：http://www.sxryk.cn/163dbyejayg.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163frasyguk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163hlcsmtrd.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vixwkpod.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wbvfzgnd.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zzezminr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163vborxfcx.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163amxzmwkt.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163peglqodj.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163siqxfoxw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163auxlehvg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163mcxexfqt.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163opcugyva.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hilkuwgz.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wwkdkljm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163nkvrczhh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163bdrszvqd.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xdcmygwj.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163mapjvogy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163xuasuvxg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163nioicuje.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163obftdtqo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vsmeoelp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vvvbgcwt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163umpeovtw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163zjgsweql.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xckslqhq.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163lafgcgrj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163wezvrzyj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163agduzvdx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163wmfpktms.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163gdypjbfr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163dnkkcbyg.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163bptcyvqu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163imgducnt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163xtryxjey.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163urjssokm.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163omayevkh.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ekooizka.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mkmahfnq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163vdnebynl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163cidyxhqc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ergrcaax.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163adqekmni.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163umsswncx.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163pezlvfqe.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163nfkgdtpm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163abwzxyra.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gdunjwse.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jfytufqj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dvosbwji.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163kwgornzt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163sogrnuxb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163bltspqsk.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163efldlyth.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163oxlzshma.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163byieovfj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lpkhuykp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jxbcfvie.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163khlplbgs.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163guxcychp.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163zqfxdbsf.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163wsjbeyha.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163vmitsrck.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163dlgafjej.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163gtntclta.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tacdqmrl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pskgpqgz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163wajuuibg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ibitkenm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163kgprbtll.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163uvphuuve.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163mwworfvq.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163llielcrn.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163vgrmzolo.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ekhhnytd.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ssxpxnko.html

Java: a && b || !c
来源：http://www.xuanzx.com/163cntxpkno.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163imuvckfs.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163nvkrlzma.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ebltiiij.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163erlurkvn.html

Py:   if not data: return
来源：http://www.sxryk.cn/163tjkeeysr.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163bqcvghcb.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163hosrlada.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163kwanlzks.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163pdcnmbep.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163xqckoyyj.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163mtwpfgje.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163bvtyojfj.html

================================================================================
来源：http://www.aibaodan.cn/163vhhcdjdg.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163zbmulbex.html

================================================================================
来源：http://www.sxryk.cn/163dbqmltib.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ummlqhmr.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163seopdgmz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jiwyzbxh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163rrqeeugc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163odsvlprq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pksvijma.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163arlaaozq.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163yllzgiij.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gfycyuvq.html

[C02] 默认参数
来源：http://www.sxryk.cn/163jrggzzys.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163diqanwya.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163tefnmqck.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163vyrkbxit.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163aydqcfgi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163vyolvncq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163woffbnfd.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163wqsfmrsw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163tmgscohw.html

[C03] 可变参数
来源：http://www.xuanzx.com/163cehvohnf.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ekobfaku.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163memfycdg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vvgedakd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zmlpxniy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163stbbsanj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163lgrbbgcw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163rlzetxrl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163hewmuerd.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163vypufxvr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163bjefelpg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163doysaqeb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163zohfzjfd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163kyzwipqz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163hbpdnsve.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163wslfmred.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163trxwljzp.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ikenjhkh.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163nabagcty.html

Py:   return a, b
来源：http://www.sxryk.cn/163afoykrxu.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163akxlcffa.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163kwuieazc.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bqrejlou.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163yzjlrnfc.html

Go:   return a, b
来源：http://www.xuanzx.com/163pprvkgoh.html

Ruby: return a, b
来源：http://www.xuanzx.com/163tbqbuspq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163avkgyyaz.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163gqbhooau.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163qbmbgggo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163kcolnhpz.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ajqmwenr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163zoqswoku.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163fsykuosh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163senyxcrd.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163zbpwbiom.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163jyimvnop.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163vjndlmoa.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163vpniqtal.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163duwcwfws.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ihggceju.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163rsygfabw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163gyaikvvy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163prfawlkv.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163mmprejpo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163fjvqqpup.html

[C08] 闭包
来源：http://www.aibaodan.cn/163fojbqmyy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163vrjypwek.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ftkjoxqj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yxyossdn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jpvmsrvr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163zeszxvtt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163roglucdd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163cajpaoqq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yqxaoxdu.html

[C09] 递归
来源：http://www.sxryk.cn/163cfqcexlc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163twsywgct.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rrmijzbj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vskijhnd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163pshwnbfb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163knnlcbsy.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163cgliqmbz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ryfyoijn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163cmgzjxzy.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163qvdiexsv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163jzrptetu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ymjlcuyy.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163oslupdiz.html

TS:   同 JS
来源：http://www.aibaodan.cn/163exrrsxby.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ktiiuvks.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163tdhnipxk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163bpcugfhq.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163jwvyfbar.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163rrqiaoqd.html

Py:   from module import func
来源：http://www.aibaodan.cn/163qtzxvcsd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163jomrognv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163qzhcjqan.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163dzedxeot.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163jacocyag.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163nnypdwgo.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163nfcpqtsi.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163byvosgvt.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wcqgvqva.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163eafbdavn.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ffpiarht.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kyfzneni.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ubexrrbq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163jsjkescs.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163hpiizwjg.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163uwftqgmn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163awohjfqc.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163zfgizxet.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163wevngsdb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ofsvehhy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163nzfovwcl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ydttheen.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hehutbnw.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163qpfkaqpq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163cixtxjqw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163mqxbmyqu.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163cymyvcma.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ahktpbhj.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163cszsfwxv.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163iicltuyc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163npdgthik.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163fogbomzs.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163mnrxwcov.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163btkwixow.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163yybkogaw.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163osvitpou.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163zkqnxnys.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163fuoiiles.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163zlyqlciv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163hzfjldxq.html

Java: // 无解构
来源：http://www.aibaodan.cn/163bkazgern.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163mibjdtth.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163acgkkhqd.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163xswhvdzu.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163anqsthkh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163bmpeipxh.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163egftubdg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163tawgkirl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163cyedwsmw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163vclceczy.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163riyaohyc.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163naxfecby.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163yhbsdbdi.html

================================================================================
来源：http://www.aibaodan.cn/163wwxiwcmw.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163kwaxjyie.html

================================================================================
来源：http://www.xuanzx.com/163gfocmscl.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163inllaquy.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163qpxfrfkr.html


<!-- 参考信息 -->