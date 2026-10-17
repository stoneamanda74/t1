外链999!wailian999！

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163krfdidrq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ojfedyyk.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163fpxqvcih.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163tgpekads.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163gfmxyjlo.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163lqzcbwlh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163notnxywj.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163bolggsoj.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163eihjlwxf.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ycrocnhx.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ldgytzrd.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163knwxrqsf.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ternjuah.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163xduqtdhi.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163dweduphf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163woxgljsi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163gkcrlwkm.html

================================================================================
来源：http://www.sxryk.cn/163jwvbjoff.html

B. 流程控制
来源：http://www.aibaodan.cn/163agcgmyzj.html

================================================================================
来源：http://www.aibaodan.cn/163eukwpelx.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163edwmrlhx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163edosmwvu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163cltsskpv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wosfnpkm.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wtzdfwcx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xdazagct.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163eprzcvjg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163wdaeaswu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ixtrnrjj.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163nyywtybp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163iudzonhw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163zyltkgvm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yuwucukw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163swkaurfs.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163utttwxdl.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163aaffzmxw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163zfzakzrp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163faryyssr.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163bldbtxzp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163pacalxac.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163quhopkwk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ezqtauwp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163pondwwur.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163zgsmgzwo.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163lvrgbklr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163bwdzdqbk.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163xjvuyqmy.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163kztvdiij.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163yrejsqoh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ecryhimj.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xjdpbqxb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163fkytnfci.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163mrqorzzq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163vhqwmrtp.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163lcgdysuq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163pzuizvdi.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163tpbbhhru.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163kxtwapfx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163ixuyvmek.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163oqkhgrri.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ndzeeceu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163bjqpeibh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ackkrxju.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163jiuhwwsw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ymshqjne.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163tvprpooz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163gfhhuklc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163jtgymvqu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163zhesukgy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163mqmttjim.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163gtpmugyb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163pdervhnd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163pokkmfmm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163oakokdqb.html

[B07] while 循环
来源：http://www.xuanzx.com/163sjnmjtrw.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163eqrjkiaq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163rxvslghc.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fukearxi.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163msgnaxgy.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xikrypmc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163rrkynbpr.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163bnnrnfzs.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163czxkcodf.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163hmqlmobl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163umpzaagh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163rrrnunxe.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hfjlwvop.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cgixydkm.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lbghtuht.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ommphjdy.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163xkrqviag.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dojnphij.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163kzkbbnay.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163jsymazjh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163fzzkatbf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163adzvfzar.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fpdtnpnm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jjtxqqqe.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163dopedlhc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163hhxohphr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hymlwjrz.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163icawjojr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163kqelvrje.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163gdwmxxbp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163pjnmvkqr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163qfqcpiqa.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163vqenfkaa.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ytpanmsn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163vqpzblxx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163vcefttod.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163harhrtbp.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163epsctebz.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163wndyicje.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163inrxfvas.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ccrabidz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163pjhgyist.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163pnxaflyj.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163kesvqfnr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163cgsrniuf.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163vfrppepm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163sxkbncws.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163sdvcdghy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xfyqvocb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xvfqxkrp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qyvesuyo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163gnttwgif.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163nxvxehfb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163okujgfsb.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163xjuwjhxg.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163yhjwivyy.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163oxqwdtma.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163krzlqsme.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nuddpmhs.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163safjokin.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163brzkqfvx.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163lfogymcn.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ntsrkljt.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163olkkhtiw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163sawkjwep.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163clvctvdp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163khbcrwih.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mxkmojxb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163yqjipiyz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163tcmpjcwg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163clrnqrqr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163skwebzmy.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163fzeflqre.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ugipysch.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163cejwghtm.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163dffosbcw.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163krldkyma.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ysuiemru.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163kudkskpj.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163gpakhbni.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163qzyjiijk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163wvrfusgr.html

Py:   if not data: return
来源：http://www.sxryk.cn/163uunpztew.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163cascixnm.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163qawompuu.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163luhlpsbf.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163whoeecvc.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163qxhigtbi.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163vbtphltm.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163njfcfrst.html

================================================================================
来源：http://www.xuanzx.com/163ydqhzmuq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163mxqjiatb.html

================================================================================
来源：http://www.sxryk.cn/163dhmorpvs.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163nznzvath.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ybeptwot.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163orjzqhjm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163adaueehl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163opjdhvdr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163iysxirao.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mxuluaop.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163bhvngjou.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ilvnqqel.html

[C02] 默认参数
来源：http://www.xuanzx.com/163zzmknquz.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163wgkbagdr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ifemtvys.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163oppmxclz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163byoyjobd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ivqvncte.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163sgjnhnxo.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ukfozuwh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163nwzdpwsm.html

[C03] 可变参数
来源：http://www.xuanzx.com/163suskxtpz.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163znzhjrek.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163wzmdtfix.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ovwirdpi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qayzhktu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ykykgzoi.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163jwoutqzi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fadshjpj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163scdfsrtj.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163szgexadv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163omjmtbxn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163eiignkmc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163xipqsiiu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163udiomygl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163vjwxcvzr.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163xbgggykb.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163eyzavupd.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mmotegpr.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163wfupntqu.html

Py:   return a, b
来源：http://www.xuanzx.com/163fdmlrmco.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163facdnvzw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ijjllgfv.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163mtbjtawq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163lzscrodd.html

Go:   return a, b
来源：http://www.aibaodan.cn/163endthiqv.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163yjjfbcak.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163huxtyvdk.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163eflpbkix.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163drqqgjzj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163yvtuxtdk.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163iizvvqle.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163oosalcjl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163zbpnmqac.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ziiztlez.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163smwlhlck.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163liuxbvie.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163xlwjcycy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163necwdnrg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163bzwcquhm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qrylueta.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163gctskihl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163yepkwrkt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163qxnxkjts.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163nwcdbbpy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163pwoxmraw.html

[C08] 闭包
来源：http://www.xuanzx.com/163xcxbunqa.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163skrukebi.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163tlwqaxgq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bmutnenq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dtqtdmcv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163dvyvuulx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163zomykfhu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163eznectzm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bbwyftfd.html

[C09] 递归
来源：http://www.sxryk.cn/163mmxwpnco.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163hdtoxkho.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ldubrdzt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163udatgjri.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163lfcxsefp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163qpdxcrzn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ksreanmu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163thcregyg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163nxtehjgx.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163nfqcfkay.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163dksbmjtq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163wckjvtwo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163mqwofote.html

TS:   同 JS
来源：http://www.sxryk.cn/163lynbqrqw.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163apqvgeaw.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ciqvwasa.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163lhczikxe.html

C#:   块级作用域
来源：http://www.xuanzx.com/163jkkidixm.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163oioufslp.html

Py:   from module import func
来源：http://www.xuanzx.com/163rzvragfh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163gmpognna.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163likbxyni.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vmdlavzo.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ascuakoz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163yctiriig.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163xbrvjndz.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163logdnzqb.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163trcfgfvs.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ffwdaasu.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163frgqkliw.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163mdigoeda.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163alpdpiey.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163vdrkcyza.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163hcgmrmmj.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163edeznpok.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163amjoxyna.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163rlffeyzc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163zujaibig.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ourowfzc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163fbnvxcsj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qzxdtnoj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pbqykasn.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163gswbboit.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163qmjrwrsr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ttxdyjgk.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163waekroax.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163yarededp.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163drhansvg.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163otadcwhz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163thwftgjn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163qvznmojw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163rqcrztdf.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163aimtjryz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163wrvqulzz.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163bdgpqhpq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163btsisdua.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163hfgtaglw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ydwcyqhq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163edjypiuy.html

Java: // 无解构
来源：http://www.aibaodan.cn/163whkhaihg.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163hwcvynby.html


<!-- 参考信息 -->