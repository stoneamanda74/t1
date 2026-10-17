外链999!wailian999！

[A26] 类型转换总览
来源：http://www.sxryk.cn/163knbndcib.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163bumsicla.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163fcwzcrhe.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163chbhinao.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163qcfpgdwk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163hbxwoxrm.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ocbqlutu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163geehujin.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ynazbayy.html

================================================================================
来源：http://www.xuanzx.com/163xcghhdvh.html

B. 流程控制
来源：http://www.aibaodan.cn/163czwzorzf.html

================================================================================
来源：http://www.xuanzx.com/163iwmuhuma.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163zofypnhh.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163hjmqxzka.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163ykfjosfl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ybwevkci.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ljgfeiox.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lnprgeut.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ijbodxjk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163rdkrjewv.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xamiizat.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163qdztymxa.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163swazucyb.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163voceaytu.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ttnyhzws.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163uifvxxfk.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ttxgqwlu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163oiwfpsfm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163pikkpbta.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zudnjzhs.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163xudzpkyn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163jydaczml.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163kkvogkvh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ndenaqio.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bjkcqyfa.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163fknasdsi.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163vjbaqxyc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ihnrpvfm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163gwarhsek.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163owegwhlr.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163gnuuawsn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163evvfwwyw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163cxwajsra.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163mcnegfpe.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163fejfiwns.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163gawdegjw.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163nunplnvh.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163hiesrohg.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163crfyoeqp.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163kqnxrfpf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163aueslvfz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ijxqsmfz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jueyeekz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163rnguzgit.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163aomlmmcd.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163aiqagzvn.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163rdsefcmu.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163lzxsfihj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163simjtrjq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163wwqzbdur.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163uiaktwdm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163moxtmdbt.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163diaczbqx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163cydfsuxt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163nlmlbful.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163pkzgxbru.html

[B07] while 循环
来源：http://www.sxryk.cn/163gggmjmbq.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163rftlwhag.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163cslyrrqc.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163eclbwwcb.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cbkvhyzt.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163byyavsid.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163fgzubafy.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163gerpinkw.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dmrlwiea.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ccyptwit.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163yjuhuegh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163hbzmrpfp.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kksvredd.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bbbmdrep.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163npyljeam.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ssgewkhp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163wfgcwlcf.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nqudgjjm.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ltndluoi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163bssyrqgh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163iunpdjte.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tfzhnuiu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wtiqjdct.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kbdjlkbl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163awxcdymp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163mxolaipd.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163oewozwrz.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163awaanliv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163pkrpijmh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ejwzrvdh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163uajxyvlr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163jtveznom.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163flehrhre.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163pefjawao.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163hjenehhb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163wlockcao.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163msclbjzy.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ojpzbflb.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ekyfglub.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bizewuga.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lpuonwyi.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163cnnujqai.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163bmanitln.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163hkdtdvdf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163zigbmpkt.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163lvjvjuuc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163wictxwdc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163cvgembhb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163auedrsnc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tbfxjkbd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163txxomasn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163afxxggqd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163gkelblrh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163csbvkbfk.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163bnvxyyep.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163pzlzmtpj.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163utnuqwvh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163kyqqfnwl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ozraqszg.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163acihyodg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163kjlgbxpy.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163vepjgrww.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163fqdzgrod.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163snmsgewf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163cqhvzvgl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163egccznef.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ccoklupv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mkjzcwgj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163cirrsipe.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ckkxuuwt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ubvoavdo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163rmisywyx.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163bjvtqzmb.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ufwmyjdz.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163lehomgsa.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163gtqyflgv.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163mstyvebl.html

Java: a && b || !c
来源：http://www.xuanzx.com/163wbphdukg.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ojqhotsp.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163qiiyuxvm.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163hyhizugh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163rswovzob.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ycilmczt.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163mrycfkpl.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163hdwjktlb.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163majqjiwa.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163qbirfrgg.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163nurqjief.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163xceakulc.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ugsvceeg.html

================================================================================
来源：http://www.sxryk.cn/163hzculacr.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163ptobusao.html

================================================================================
来源：http://www.sxryk.cn/163nophjsbk.html

[C01] 定义函数
来源：http://www.xuanzx.com/163mjbsmaml.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163iwfscjuo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rddqxcas.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163phervsrc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wwpztocq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dhkpzizy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163zyhquvrp.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163fcophbqz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ibbvwlzo.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ydegmjhw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163miegeedt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163obimaueo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163jzdfabnb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163tmrmvukj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163bhspgsie.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163zlkucuma.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163jvsibmvc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163kvtjtapl.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163adpixpie.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163gyvrzady.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163bsygnpvp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163aelkyriq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nmvsjnhx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ureanchb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163zkvuyvhe.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163vehwunxe.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163rlyollef.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163cdlxpivm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163namlmtmc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163dbbywvpw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163nracqqxk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163qjstgjaf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163dvigycge.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163mrijyxht.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pepyjabm.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163acbxstum.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163hgkxiwcq.html

Py:   return a, b
来源：http://www.xuanzx.com/163tnnopygt.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163dsxhaybs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163qhesyzbu.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163auchgvri.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163joorvldi.html

Go:   return a, b
来源：http://www.xuanzx.com/163zmnxctjf.html

Ruby: return a, b
来源：http://www.sxryk.cn/163kvntwoov.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163hsdfkciu.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163vslzvuzg.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163zmsylnoj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ewmenvww.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163qjigiakb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163jyxugkvt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163nogsiffc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163pcctdoch.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163elsvlluc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ixkimsnw.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163mqrxgidz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163uktgjwcr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163flwmtrbi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163ohnvgxfu.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163qdcutwan.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163baoxtczk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163qtanjllm.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ekohafnq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ddjyocjq.html

[C08] 闭包
来源：http://www.xuanzx.com/163jrcoyfqy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163cclzuskz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163fipuwnsk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ogxssktm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ytswpubq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163wmqlkylu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163gjsuuhqr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163nilkocrq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jtlotvtj.html

[C09] 递归
来源：http://www.sxryk.cn/163xwqlddwf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163owuczqag.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163zxnrvkqk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hbwzyloa.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jrgpdbzh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163waeecfih.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163nndchatd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163crpgeqbq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163nfpsaasx.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163kyppdyvg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163mdbfdqws.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163muzdgols.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163lqpyuzvh.html

TS:   同 JS
来源：http://www.sxryk.cn/163nvtzihtr.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163tntukfyd.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163zepdyqou.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163qygmrqgp.html

C#:   块级作用域
来源：http://www.xuanzx.com/163vnujxjdy.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163mgcmmyyu.html

Py:   from module import func
来源：http://www.sxryk.cn/163itrrutpf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163yidaerwu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163davxwrmd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163awvbdtrw.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ahgkizcn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163mmctvcry.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163aybpqrks.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163vpdfvsdd.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163txuadzkt.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163qeinksjk.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163zcaijryg.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163stabnlla.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cessezhv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ojhonuin.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163qssfkyog.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163fvkkojes.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163opngdijc.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163xvrnowtx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163qeqpbyfu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163facfxpuh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163rtypaios.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mtsdcyir.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163knmokizl.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163wzfxgcxb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163vnntvdcq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163noqlawcd.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163eynyetzr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163goopgorm.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163nmtmjjcl.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163sayfkvfu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163vqehivob.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163oeeityny.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163muytdwuu.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163fucsxinx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163uwvfecxk.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163zzqyofxi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163hkdsdcte.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163gvtozgce.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wndmhtgu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ymikmrwb.html

Java: // 无解构
来源：http://www.aibaodan.cn/163xdzdwmsy.html

Go:   // 无解构
来源：http://www.sxryk.cn/163qlfjklfp.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163umydhpkg.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163xkwwounm.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163xhhnshim.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163vhshymgu.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ipkerxwc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163jllixnbo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163mbzziajg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163bbkqzssl.html


<!-- 参考信息 -->