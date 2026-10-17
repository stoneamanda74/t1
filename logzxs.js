外链999!wailian999！

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163xsmnatfq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163tptmyybv.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163cvgqeedk.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163mrgipgvj.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163nbvhascr.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163qchtoryh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163fqtsgnsr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163zjljekxg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163rulbuajq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163tdawzual.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163kyvyxkjy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vsvuqvze.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163rciufulx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163bsmlgvnq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163sgtqjrkn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163xrhcroin.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163paqzzmsg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163iixdhsiu.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ptanwfwc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163xnrutalv.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163npuebenr.html

================================================================================
来源：http://www.aibaodan.cn/163ugtcdnzl.html

B. 流程控制
来源：http://www.aibaodan.cn/163esdwsebm.html

================================================================================
来源：http://www.xuanzx.com/163btgsmkjc.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ampurnsr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163zpeniksf.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163zoaezhnc.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ftjinanv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qtdlnkbt.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hdmslvmh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163mvkjlotq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163mbuhofsp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163aouojtng.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163wnvyoisi.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163xtejyfdm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163fcczzhyd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fcwbvchk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163czfqpsmx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mvopywpg.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163amwazkev.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163bbmhrjyp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gydjecey.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163rbimnapl.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163hafemcaj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163tmdtdoow.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qxysjddf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163eyjlwjve.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163rzpwhmda.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163wuxrsdsb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163zutdmffe.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163aoihooln.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163cuxcbcwl.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ykyzsfkg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163hmzapbiz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163pxpsjxpi.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163mhvrvjmi.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163wbqtfjej.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163wxvzolkt.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163dyovtfux.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163bchovjtu.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ubbhpcpq.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163zlxqbpws.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ilpzqqxt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163reiphngj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ucrbqewa.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163nlumbeyh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163lkgnhqzc.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163zuautgun.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163fixawqws.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163dfkpghga.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163uvzrcxce.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163wabykegt.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163dxhorvxo.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163avrevyic.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163reaglbek.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163jmjdlthx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163mzguffrw.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163nfddwesm.html

[B07] while 循环
来源：http://www.aibaodan.cn/163qugehwhs.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163pjzudonn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163fajecnna.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ccxhmega.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xmnjcyze.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163exxckkee.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163mzyionqb.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163vulkeczs.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163enieiscg.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163efjnmksd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163vlgcjpam.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163jzfsxwka.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163eziwguun.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163etnotozz.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nyvojhvz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ilpdnmqm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163htbktyqs.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pzalsxxl.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163isaqqgsf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163jnouyzbp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163nsfrgjnw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fukuhgdb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pqrkyoxs.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bzmhoewd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163mlanbosg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163jzmsvqjv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dptdstug.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163vwbjrzio.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ztlvcedm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163orpmfoxp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ajjfvacx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163vguhsokp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163orykimlp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ymiockoe.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163kxwvlzer.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163hhcomqav.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ivacunkn.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163xpothbgv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163entqoctl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163byzvibln.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163gfidzurl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163bijwvjdn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ymlejnlb.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163pgxdbcsl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163pjpmnxql.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163upiwtpbz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163urcuthos.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163omijomkq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bggcwexh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163pxossbqq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hokhscrq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163niuljtsc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163zxhebfqu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ukdwlfzu.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163nbmrlduz.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163puwedhmt.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163stmriflp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wvukumie.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163camoktmf.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163apeszahm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jgfdzbyv.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163kawyerqt.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163yiuomdsh.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163rhzfnmwi.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163pmfeykdb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163azskvimf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ithvtyjg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ofwfxbwy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163mtjaptvy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163cnqfxakf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163smgozdor.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163splbjvut.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163utnrqomx.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163lpapebpt.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163uyvhcjtx.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163auiztwby.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163scltkjjr.html

Java: a && b || !c
来源：http://www.sxryk.cn/163creabelx.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163yvvlguzr.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163fjefoxqv.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163tgtfjdue.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163bokmwkoq.html

Py:   if not data: return
来源：http://www.xuanzx.com/163xncojqgp.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163wopxxzuo.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163jmlskzlb.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163mejvfwne.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163moyhczrr.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163rqbcfnrz.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tqhasdih.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163civibeyq.html

================================================================================
来源：http://www.xuanzx.com/163ntakabky.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163wgxtdxtg.html

================================================================================
来源：http://www.aibaodan.cn/163aqpvenne.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163pxuijdps.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163wbvcxshb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vavytdif.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163fhcaahlu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qlrjvyea.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163womrwkyz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163irmbmwdv.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163grufkhaq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wfwgnusi.html

[C02] 默认参数
来源：http://www.sxryk.cn/163quxajjhz.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163mpxfdmmp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163pdjpuahd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163tglyyzqs.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163devluihb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ncpfunca.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163uxcgqwtc.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163uovqyfze.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163nxstrzal.html

[C03] 可变参数
来源：http://www.xuanzx.com/163gsmssgwo.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163izipwhhz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163jvccpzew.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dtixbeib.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163cdvvldat.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163uqsfotot.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163cwvxtdgn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163njxgqxpy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163zqdbxifl.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163othebupr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163pnacncom.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163vujufjjb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163mgiovisc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163tilnddgk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163luwziwvh.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163hjrqicyb.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lntrndgx.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163utkcujah.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163psgzrarr.html

Py:   return a, b
来源：http://www.aibaodan.cn/163jbuzgfbo.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163dqyuckwa.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163hmqotbij.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163vcjeplhe.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nqcfsscg.html

Go:   return a, b
来源：http://www.xuanzx.com/163mxiiyrtn.html

Ruby: return a, b
来源：http://www.sxryk.cn/163adduogwl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163xratvlne.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163gmqywwhu.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163zfluvtuc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163dnkfthxz.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163mmvwjtvw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vmimowpl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163oqrecxoq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163aeozqyip.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163whszifhf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163mejnavvn.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163wvymgeue.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163latyijyo.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qoguailv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163tkgknguk.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163bsyntcwo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ocmgjzhn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163siytxrup.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163wsrzqltk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163bdjhbnol.html

[C08] 闭包
来源：http://www.aibaodan.cn/163mvedjarw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163iioqspvy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163giktupoj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mctyurht.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163sftsvmff.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163mvddvjqi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163kmfazzot.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163eqggifvp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qretwnlw.html

[C09] 递归
来源：http://www.xuanzx.com/163mikkognj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ezixupfn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163spockdqo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bjzyagkv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hhafwity.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163jsdxthnl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163sddbdoab.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163zmabvecj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163fqjeoztp.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163dmsmcybj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163mlmmzcxz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163grbwratd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163jfwxhtsu.html

TS:   同 JS
来源：http://www.xuanzx.com/163kflgrdpw.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163hdvwtlol.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163jojtbdhv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163yixfkbks.html

C#:   块级作用域
来源：http://www.sxryk.cn/163nbdlfret.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163mauhtsqs.html

Py:   from module import func
来源：http://www.xuanzx.com/163xubfgkcx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163mkjwfeqv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ofpzwvvi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163mwtwwdlc.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163mqoawzxo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163narhqzug.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163nidespjb.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163tpdxllas.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163smxdwmok.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ysricwit.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163xxfcqpxw.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163hxgeqyqs.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vywkpvdu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163elklgfiv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ufyjkawt.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163lxkqweyz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163lbhumgsd.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163nfrsuzkm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163sctnbgzn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wjlbpxwg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163kbqhleky.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163eqgupoyk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qchcieuy.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163aflrqsaq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ylwygebo.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163hklcrkxa.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163eyhshxop.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163fhuajwrx.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163nccoxwfv.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163uzstdqqi.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163nahnexpo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163gzbzdgkr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163jztlodkv.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163fhzijtut.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163oiroaohk.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163mxbxchfh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163umilgjwa.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163passppsy.html


<!-- 参考信息 -->