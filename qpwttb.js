外链999!wailian999！

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ietcjswg.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163cptbrwhu.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163rtzqsisb.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163qrqalsza.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163fmyhxzwo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163taogkjrv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163iwyeprgr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163hjepaajt.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163boazseez.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ryqsczlb.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163iuccrerq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163awyxjczl.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163virpphdx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163dqnukbat.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163yrkffupp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163jpkqazss.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163oukwzykx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163soryvbzo.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163llffrowu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163glcsmarq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163hspcuqlb.html

================================================================================
来源：http://www.sxryk.cn/163gvmhjdol.html

B. 流程控制
来源：http://www.sxryk.cn/163dyiyumzf.html

================================================================================
来源：http://www.xuanzx.com/163ibqecdnm.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163oabewmyl.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163rsrfwpkx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163oadsxpoe.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163sugmpnhq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fojzpner.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163niqgfddw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163mbbqlphu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163kgyhglrl.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lvjjbpmt.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163qkyfvhcy.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163gqlejodr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163vydjorko.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fogndpob.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fggupssq.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163djklxwki.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163rmzxsbyy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163bciagxmi.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ehxmxawa.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163vcxgpack.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163yjplazlh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163iniesklt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163utihflbi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qsqpkmny.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163gsaxbnpv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163fimhtdyb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163irkcjdju.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163hfprmiwf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163loygxvhn.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163sskhpvsy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163vrwajvar.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163bqaciqvg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vzegtkgg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163zauwwikm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163sjzavfbj.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163jclbtgzd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163mvnakdor.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163nixfsxpb.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163wgfjxaev.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163jzbpyzjx.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ogkrntcx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163voizkelx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163dipjzolr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163fayuzwkb.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163afrcnpvk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163hqjxeycm.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163lhewfznk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ucqfuofw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163olairzdt.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163pautjqhz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163phnzgkfe.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163kttrgyuo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163npcgqgwk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163yubqyxgz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163zgrygupu.html

[B07] while 循环
来源：http://www.xuanzx.com/163iudvxjcc.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163oyhlpueu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163iwhcbwdr.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ydaehxgm.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xhyqekvg.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yhkkbldx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163jhvvdpjt.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163gzfifdzs.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xdrucxyp.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163xjezzgai.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wockugga.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163puqsfyqz.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ohercgzq.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rhpjfbdn.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ufvnrugu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163opwjbdtd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ggdvcbtb.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163smjsmjra.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163pdollbzr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163sgqokgzi.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ugayytvz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bcyjbnnq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nwtajpas.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jnwmtjxz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ljuiwvfc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163qdgsqsif.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ajvhszma.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163lodixlbs.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163yrixpmfb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163uvfrumcm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163yuviyahi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163oefzrqkg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163fwumjnkd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163bantbyvj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163daqfhlsy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163xaumolsv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163bpftstxk.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163dvnaztri.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163oxetmfyv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163jbnqhjgm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ikqvotoz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163msimfwsu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163xgljhqvq.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163hcaffvto.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163tejdjywy.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163gzpjpfyo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ltdibcqo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ritkvxzi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yxpjvafm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gcfsycis.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163peffmvza.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163lknyktlv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ibbrgibd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163tionfaog.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163tzbfhwfw.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163lulwotgp.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163dnvhacqd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163crvgqiic.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163gosizkoc.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163rizoyqai.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163nbxuglkh.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163cmgbtcgu.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163qeiaukcf.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163vkobwhgj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163itlywxea.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163keocghnc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163eirpfttu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163givutpym.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163wdetaydh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163cjuiwmhl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ozulfdbw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163wmtfufda.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163zozcmrwj.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163jmrqhhbu.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163dzbzgcay.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163dhhnoyyg.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163fwpjopxk.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ozwdasbb.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163nmkjltvt.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163hhvllgli.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163gysozaae.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163nusqnlfc.html

Py:   if not data: return
来源：http://www.sxryk.cn/163kfeelpvf.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163korknnvi.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163mkpbdfcw.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163zshbpiul.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ujfgcgcb.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ltawospt.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163lptlhiwb.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ntezlnwk.html

================================================================================
来源：http://www.xuanzx.com/163pgmhrbdr.html

C. 函数与作用域
来源：http://www.xuanzx.com/163mpctzogc.html

================================================================================
来源：http://www.xuanzx.com/163tyatgwzs.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ruszsvwm.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163pofrdyjh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163irgxnbno.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163mzkpuvtp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163sltwbhan.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vvqxniay.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ojkufytn.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163gsfegexo.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ikugarhu.html

[C02] 默认参数
来源：http://www.xuanzx.com/163lvxjwxjx.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163otgbgejq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163reupjqhj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163tcchbfzc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163chvaffxd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vndpgcmt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163jeqsttbh.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163xqvycfed.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163hcqccjhy.html

[C03] 可变参数
来源：http://www.xuanzx.com/163vhrpsmsv.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163wougqogu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163rycegiym.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163adgjfjdc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dhfygpes.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163lalnmybf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163lnbwzbxz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163pwoillhl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163zetfyvqi.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163tplhqkju.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163rewartur.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163mfolfgbs.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163elwnawgn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163guybxvlc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163chnphdxt.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163loztsnbn.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bfzfnatk.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nkqbjmsk.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163cjlqkoub.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ltgltxqk.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163bdvxcmfy.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163rifzsmoc.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ditqaqhs.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163wojodtib.html

Go:   return a, b
来源：http://www.aibaodan.cn/163rddbizix.html

Ruby: return a, b
来源：http://www.sxryk.cn/163stobdqso.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163tfsedagc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ajaenmdt.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163fpdbjtyk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ammomqhq.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163knmibxmt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163sxgdckfo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163cnvwvjwc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163iqodexyr.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163fzzmhium.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163wcbuzaqs.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163tizdjcyk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163aqdjputs.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163zdejatpj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163kndetvhm.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163urqmbxxz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ckauvwty.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163naetidby.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163atgdvvkl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163njblziks.html

[C08] 闭包
来源：http://www.xuanzx.com/163luujssen.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163kluedhoe.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163qejsixsj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qdgddvul.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ynjnhyuf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163oimoxsec.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163kdsztecq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163vysfashs.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vahfzfaa.html

[C09] 递归
来源：http://www.xuanzx.com/163gjeyotlg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163bnwozjcc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163xzbyvscw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163utbeugou.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jqkxovzz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163lellhxzr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163beqohkzm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163tfqxzvfz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163qjgkmwft.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163jgdejzli.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163xyjanhrt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163yahrhagf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163nizghttx.html

TS:   同 JS
来源：http://www.xuanzx.com/163qvqnubuj.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163wtckbunz.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163gfjcmdfh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163bwjydrjq.html

C#:   块级作用域
来源：http://www.xuanzx.com/163zfxliugm.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163owbgqakf.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vondlutn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163mjnzrovo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163tdtcjurr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163rweyehzj.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163wbdfjfwd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163tknxxpsh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163jxsiejbd.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163fhqojtlv.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163xyrnarce.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ueydzeab.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ukzbtsyb.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163khrdxnnh.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163urvhqgzo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163vsbwieyx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163mtbpazmn.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163spknurst.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163yvejcndg.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163cbjevrkw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163fchirimw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cbvyikjp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163hdrlhgst.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163aewqgbdl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xuefiamt.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163vwikvdsd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163oyrlwmpl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163rsymqnrb.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163wjszorgq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163lxkyrslf.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163hmvsjdag.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163noqrhgvp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163eltntkee.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163bfibqhsb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ncpzxcem.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163gaqicllq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163urtojpro.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163vhtofqzn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163mcmzkmkh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163iokrcwzy.html


<!-- 参考信息 -->