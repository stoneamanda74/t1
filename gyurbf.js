外链999!wailian999！

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163oslreoya.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163qqiwhlzj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163sjlqmjps.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163vsbvkbgh.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ejwmxjen.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163vznfyplb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163joglbcod.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163txkejsxg.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163tvnujalq.html

================================================================================
来源：http://www.aibaodan.cn/163rhhgkbal.html

B. 流程控制
来源：http://www.sxryk.cn/163pfuvfgxj.html

================================================================================
来源：http://www.sxryk.cn/163fgcpoadf.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163knnxtnhh.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163rmnhonzu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163amxaolfy.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yqoelfas.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rjuhotlv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163crmqtjkp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163dwgncuii.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163rhrrccju.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zlrssqfj.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ntgzoquh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163erucvcdq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163lvedojpq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tdwgbaqz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163doinojiy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rgjrdemj.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163oaywdfsh.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163toogmqnh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xfkdyewt.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163saezbqoz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163pfrdrrxt.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163fbedblix.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ndvbermz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163txmegqgi.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163cxobiirz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163refextga.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163kzdeyrca.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163sexxbzys.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163oadlheaw.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163zflzoins.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163rxskljjp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163gszwrmut.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163aywbvnzl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ivjhvffg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163qbsufenb.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163jlcdbbct.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163yxkmmtks.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163upqgactj.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163wghcarld.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163isqpbqxd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zlbodphc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lvowycem.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163gfrsfvjx.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163fxwpsfkr.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163mmcawovp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163qtoqseoe.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163uerjbklr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163pvmxfmra.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163uftdnkcb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163pdzsaclc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163naaoadjs.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163qihzryht.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163chfhciic.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163stpkujue.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163iyyrpgqq.html

[B07] while 循环
来源：http://www.xuanzx.com/163pgrvjybk.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163rjhccffh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163jmvajhkl.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ldbfjfoj.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yyaqjosx.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tdmvsjpe.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163apyhwgul.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163mdzudbtb.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ytxsxtcr.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163jexutqtu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163oqitlgto.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163kkpedudn.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bsiqdiye.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dpjzaonf.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fhsnheyi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163opwhtmox.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163qwsztsjm.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163utnekvwt.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163vlpzsysp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163brhsurzh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163bzwqtlki.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vqrxszds.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kskdpnvo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ntckvmkx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ahhyncjw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163pxnocfjl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bsfhgkio.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163zpdhbskx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163qklakvra.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163wrngpaqw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163bqgewhxl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163vvlbbfnx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163exewjoyn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163gcovjubt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163whdpxvim.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163cpdqrmof.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163gmwvphia.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163bavrfyjs.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163zxgngobt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zolbrrlf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dwzwjypz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163gcvsbgjn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163eqvhyysa.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163aejextxr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163oxysajwx.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163pyeswhbm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163auggbwue.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163qjlyocqh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kkhivndn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163kovftvsd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163oewplpho.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163lwtzugix.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163qiiwcnwh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163hauwlkkw.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ecwntpbk.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163xdevyfsu.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163nvdupskm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ryuybski.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163oyfqblsl.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163yvdmrvuo.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163naiogbab.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163bciwwssn.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163gjbyepzo.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163fvvxuqyy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ljjgkhjo.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163oqwamsxz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cjafzhno.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163chtgafmr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ulaekgbl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163kirvahoe.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163icsqrlav.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ctnmhhwb.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163xikllkng.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163cyqwmvli.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163tzxeuhvt.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163vmlkgeqp.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163osdngrcd.html

Java: a && b || !c
来源：http://www.xuanzx.com/163brbdqyor.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163poeliwdg.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163imsiatxj.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163aqtifgbu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163flhfudii.html

Py:   if not data: return
来源：http://www.xuanzx.com/163zvkgpffu.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163kjcwmzij.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163mhvhices.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163uaxmjgpn.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163tsiipbqc.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163hnpywcyy.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ilqzuing.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163crgkdcai.html

================================================================================
来源：http://www.xuanzx.com/163vwxruxju.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ojridtfo.html

================================================================================
来源：http://www.aibaodan.cn/163upylsugp.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163jpxfbnwr.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163hprfykzy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163avxsfbua.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ntsbinzs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163vmgsvkfu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cxmwjbuo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163fkxfilkj.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ezlsgutz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bggjhezj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163xbqsburj.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163qlmwhoer.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163riycgakl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ecrehqgo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163tcmqosey.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163cgdfptin.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163tajhmpmu.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163hquadpak.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ajdtprdo.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ihkttxsq.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163spxoseqw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163uvvpshcq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163drnnnsnn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wobxzcwd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163epqyvryg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163mbmshumv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163whghqflk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163pwapwwpa.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163xxcgngvx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163wwazaddf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163jlsarvew.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163opzeaily.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163dfbltssf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ydoysuqf.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163mxcuuksn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163eecihtte.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jmhvgftb.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163twfnuptr.html

Py:   return a, b
来源：http://www.sxryk.cn/163utlqauus.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163tijpmurj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163anryqwwn.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163kgmueeap.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163wtelnwqp.html

Go:   return a, b
来源：http://www.aibaodan.cn/163txtoylan.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163xguwyozb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163kzsxrdga.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163bovuymuj.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163xzervsiu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163xrwofhov.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163sourfnql.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163oghpybtt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163zdxycfix.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163vsxzcrvh.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ybfgicge.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163jtjpsjgr.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163sszlmsel.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163tntgyrjg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163wqedhepf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163yhjarsfp.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163wsfxpkcy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163mjuuuhaj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163qnxsqixm.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163iakacptx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163oscicpxf.html

[C08] 闭包
来源：http://www.sxryk.cn/163ljuovher.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ltteednx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163qqmieknx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163csenxqas.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ivktmsud.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163nlqruqhq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163txmgfeqp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163xlxmijkp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fflnemwz.html

[C09] 递归
来源：http://www.aibaodan.cn/163armcdnwz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163xemrmlcn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163llzjlzsh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163huhgynex.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kfuvgsfi.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163zxwyzgmw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163vlubafbl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163szijkdhh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163hrgspslv.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163sjunhfoj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163nshfcpth.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163aihjqszu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163vgvsbnsu.html

TS:   同 JS
来源：http://www.sxryk.cn/163phykqcsh.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163dqkcuhyf.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163bfmkyfqf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163dwwylmzc.html

C#:   块级作用域
来源：http://www.sxryk.cn/163pcihjdxw.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163dzsopvzk.html

Py:   from module import func
来源：http://www.aibaodan.cn/163gvjwyvpe.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163lmbbmsht.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163pcythwui.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ibohgxwh.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163knklzulr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163twqwfpck.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lfdelcbi.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163fecjpuyy.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163uynpkcgo.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163krkoaioy.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163mkriivze.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kevukydd.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163gihkuafo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163puikvlsm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163zsnpqann.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163jzmhauws.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163rvpxlysf.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163sltzpduz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163dfcpmrbu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xapebskz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ydgoylum.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bbiqfkxx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163iyktnoxv.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163zwkhdair.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163arixjiyi.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163itsldcvs.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163oqrjenae.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163fqdxcbuw.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163mkmiypif.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163tkoebzgd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ooikfhqp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163pnnzideg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163sqogljbb.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163okdkaqrs.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ablhoeat.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163xsfucynp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163pojgvycz.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163fyuwnfav.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ravfqugu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163uvapdpbl.html

Java: // 无解构
来源：http://www.aibaodan.cn/163yyhylxxh.html

Go:   // 无解构
来源：http://www.xuanzx.com/163vhzxlmke.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163zihzktfp.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163vnvagkwo.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163byxernzo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163zxjsfnhx.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163rgwypqyq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ryhnfmfb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ilzfblwe.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ehhlsjkr.html


<!-- 参考信息 -->