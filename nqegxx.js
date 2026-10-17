外链999!wailian999！

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163abjnksoy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163kqfxdqqx.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163jcysyfmj.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163jfqsdjox.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163uelryjsj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163eyjyoupy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163vsuevoqu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163mlppoqff.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163lmtzitdk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163uhcdppkd.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163ejjydgnu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163xyifxzbl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163fuyqpxos.html

================================================================================
来源：http://www.xuanzx.com/163ljghkbhg.html

B. 流程控制
来源：http://www.aibaodan.cn/163iyjtxrji.html

================================================================================
来源：http://www.xuanzx.com/163dkfprfzw.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163zfdlxjvw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163aqkucdxp.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163pduyjdjv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hbahobwt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163upfqyomi.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lkortrle.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163xqqbayur.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163wudkqeni.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zwipvupb.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163fbrxhnxg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163cnxbztdk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163xueijdbf.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zcieqldb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ldzgqfsd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nfgrhdbx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163ioldvgxy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163zzvavqsk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163thtoverf.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163oktvqdcs.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163aurqbrxu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163wtwezcrh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163poaofnmi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163gfvdscgx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163jjnxzehf.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ibgxfmgi.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163yqnxjtjl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163wlwyljrc.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ttgirvah.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163wmyfbaqy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163kvsjazre.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163nzgxfuaw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163crsuodsv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163wovrftft.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163psaejwcf.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163eukywzjj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163csyahvlx.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ysyrnzbu.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163vmvkhxrk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163robtxfxs.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163nbywvxif.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nznvhxlh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163vzorbsrs.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163gzifuapv.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163lsubqtpt.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163marizaas.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ltalxpto.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163aamivofn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163rnzpemvp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163tyovfxcl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ptrjyogp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163pwzebijx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163lujteycu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163aiiyxuuc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163wmenwqey.html

[B07] while 循环
来源：http://www.xuanzx.com/163qytrkuxb.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163wafltrxm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163rjiacogq.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163veramcwh.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dmnyatck.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jhrdkazx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163cjfxxzkr.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163sskbdriv.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fmxdkibb.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ioiwbjyn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163jdczarcy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163zwjaylxw.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lvejnhly.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163csanpixz.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ryleyygu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163gphqyzrb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163kmqkgunr.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lccfvpjo.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163etpfftig.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163yaetdzlm.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163twqyumpl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163abvyasfs.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qcumnfqo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ggclpstr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163zhgrocwr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163lmupjnwy.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fyvfluew.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163nbzrmamv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163jejeghiz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163cutbqnww.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163niruyoxh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163gcdseupt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163rxoysbfq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163kbccnglt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163rjorjnrc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163qmljflwf.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163czzodfxi.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mgaxpakv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163pxyohkjm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mefrzabe.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zldpzahx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163dkiaaikt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163tgougnda.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163fbryaznr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163grogrhmt.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ykimlsxk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163jmxzoacw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163arutdfzl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163iqnowvvo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bwoacedh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163usertrwo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163dgerahre.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ycqoanxb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fdovrdzm.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ifvvxoaw.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163eqvtxuuv.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163eidnywwe.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163juchebkr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nhjfkhsc.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163dcjapjkc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163pxupkxwg.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163tqostehe.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163dsybpnjp.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163fpwejkur.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163aqjphybc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163jpqqqqpa.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163agkunzhp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vyqjajhe.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163jwxfkqhr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qambqhga.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163trkybtxh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163vkzrgtpe.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163zrkagghr.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163macjnism.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163xpgnapgc.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163mkdurlzj.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163gxjoaize.html

Java: a && b || !c
来源：http://www.xuanzx.com/163rifjucqz.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ejkolxdk.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163sahvzgkq.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163isyjyikt.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163jvrjyanz.html

Py:   if not data: return
来源：http://www.xuanzx.com/163svadbcvg.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163xhtjtohf.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163lqfphhzj.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163hlocfqhw.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163eporpihc.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163swvfejcm.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163igwrhmse.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163hbwgjeec.html

================================================================================
来源：http://www.xuanzx.com/163geztxswh.html

C. 函数与作用域
来源：http://www.xuanzx.com/163sszzsxhe.html

================================================================================
来源：http://www.aibaodan.cn/163rzbnpgjr.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163iueewidr.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163wubkxmkk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tnzjzdaa.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163uvjsafbc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cdbuenrr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xertjrop.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163znpcmdon.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163sokajtkz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lbfjciqb.html

[C02] 默认参数
来源：http://www.sxryk.cn/163uetcogmj.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163arasjukc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jurrdihp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163eozyjtlo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163rabshwxu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163rbayivba.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163cfvtvwud.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163plwtvryu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163tyzpbwno.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163vsyeplip.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163zyjgqujk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163gwsrfjoc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163bibghoqe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163eljpyyuw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163kqoadikj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163bshvtrxk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163pwuzdenj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ztzjahcz.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163hotgclpt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163uqwfyvpe.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163glcsdnsa.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163wwpdvvfa.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163mydiuvyw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163aqslscbk.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163iasrqsnw.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163yoidowuo.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ewjlkftw.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163btltkkko.html

Py:   return a, b
来源：http://www.xuanzx.com/163rnzeniwe.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163jnxgzbjg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163sjsryazj.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ycynhuzr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163tlnoqacq.html

Go:   return a, b
来源：http://www.sxryk.cn/163axhukmvs.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163wrezijlq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163mbuosgjg.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163oezkwgjw.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163mlasatuh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163vngkjaro.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163zwvyosfq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163vcbtiqku.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163vgkzrxbk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163futeuwzf.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163pemwqtum.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163nnexokaq.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163zhybuizv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163orgkwnuh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163qbqzwbke.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163ypuqbohs.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163nvtasozh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163sumtbjim.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163iudundvs.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163bqzljzur.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163fxbomjlb.html

[C08] 闭包
来源：http://www.sxryk.cn/163svgftayr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ybhhqrpm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163mbqwqaln.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163snzlzjls.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nxkgiogr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163mpxesjki.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163vinbrapa.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163knhunner.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rojeerjd.html

[C09] 递归
来源：http://www.aibaodan.cn/163ypybcjuo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163gquuwjig.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ywkxxaww.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yisystnc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jxhpiaco.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163sidqhpuf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163zxeqjriu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163bqwojazq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163mzroxldq.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163jckhzhju.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163pyuiznfm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163bykslpll.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163lwtuqpml.html

TS:   同 JS
来源：http://www.aibaodan.cn/163hxkahgjt.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163bpytijwj.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163camnegnd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163xpanaikn.html

C#:   块级作用域
来源：http://www.xuanzx.com/163pyfzmmqz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163tcbpodce.html

Py:   from module import func
来源：http://www.aibaodan.cn/163pboxtrzb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163njananuj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163fppcdvjc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163upfxllcz.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163bvpzueas.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ypqhdwwc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163wwvzpqxv.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163skzygbti.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163dxsnowlk.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163laockepr.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163xvulgmqg.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jwfqrkxs.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xzfgqjxf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163czvmdaqs.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163mbbzoktw.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ndsphhyd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163rkhmphpp.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163kjwdbxwk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ofyuykcl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qvsvazze.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163iwdumszm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163kpphnfyn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163twdvnvto.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163pduqquwy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163qctyoxfm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163piobldmp.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163muxbsxrv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ykmjnawd.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163fmbjqjxg.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163gyburyxn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163alghggtz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163btbrcftl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163frhdtcwb.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163vbyuwawp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163kcceqzlq.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163lncyquql.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163fmxdxggw.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163vsmabczo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163khvvxhpl.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ikwwoeca.html

Java: // 无解构
来源：http://www.sxryk.cn/163yaboiefx.html

Go:   // 无解构
来源：http://www.sxryk.cn/163vttoaifc.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163oszmvlbx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163wkxowhpc.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163xdfxdmtq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ryxixhme.html


<!-- 参考信息 -->