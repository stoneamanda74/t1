外链999!wailian999！

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163mjcwajsc.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163cwfpdnfy.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163kkxmgcyk.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163uigchpep.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163okrozlwi.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163akwytnap.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163fppulxzw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163kbdlxtus.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163nnoegrwf.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163qscrqnpn.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163rhimjkcz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163nfzbtoiy.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163ngxleeek.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163qecxwmok.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163euxvikte.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163juejzwmt.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163smvoutfu.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163iievjkwq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163xahxyxua.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163bvtvxple.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ztwbmcdk.html

================================================================================
来源：http://www.sxryk.cn/163cbohoill.html

B. 流程控制
来源：http://www.xuanzx.com/163gkbyppue.html

================================================================================
来源：http://www.xuanzx.com/163tlxmnqpr.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163gzocstuu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163osdjtucp.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163ktveaycc.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fdkuofvl.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rwgeersq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vvzvzlxu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163zekuelln.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163dirgckno.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kvikfbme.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163yobbmlsa.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163fznywkys.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163kijtxjch.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tvkzpvpt.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yltwonxa.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qdjavlib.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163ugzikwil.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163mevscnrl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163alacwldk.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163bibicshm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163qsbnumor.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163gejvnvmb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163sknczusy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zizvcfnx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163jfhmletu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163thgekvdk.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163buxdbkfj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163gbopsgvd.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ivqmbjne.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163pbukqptq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163abvnnyrb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163mubfdepq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163jbyguick.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163guooobjm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163rtiwtsos.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163cscbjlos.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163eachtyvs.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163tqrbgrlo.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163yyanulpy.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163iwcbwhyy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163sabjqaqz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163oesscask.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163rzwjvhpy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163xsacftwq.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163riucxats.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163piupgost.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163yzwwxbvm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ffzvyxpi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163kvkhtznb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ovvmerab.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163duphtdhc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163qrbskonh.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163gkvjdngi.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ruhieznr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163kwhsglig.html

[B07] while 循环
来源：http://www.aibaodan.cn/163sgvwmqwt.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ypictcsp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163kvduvgei.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gobyzgeq.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nszycivu.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xndshvam.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163pzrkrjqw.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163djttwoyn.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qqlyypna.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ehmcxaru.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163yumsfnqj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ydjdheqx.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163igrgcvfp.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163czmpbget.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163anucbaqh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163uhsngdww.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ybnbwmer.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zhmzixvm.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163koimpjfx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163endxasex.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163xcifyfbx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rdmipvuy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kmeoerps.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vxzsubqj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163xlziixaz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163hpwmmoep.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tambpoxm.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163mwztparn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163uqpyhhbj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163visfuvay.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163itwilhnf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163yfgfubav.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163tluqzbki.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163iwlxuovq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163bbzlnvtq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163nrrmpnhv.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163svitfjay.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ajmbbmhk.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163zomqncff.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163pumpowvp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ojhtkfwg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163bddajjjo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163esyfczta.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163czhuipzz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163phdibxop.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163wdmgyopa.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163mcsuqkas.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163lufhxkmc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bthdwaii.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xofzqfgq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dsetdyro.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163jkzjlfeg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ehsvarad.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qnuvfkis.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163qpmkhtmy.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163fwymusuh.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163emziqqxq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163jrsegynr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163iunefngx.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163nxcdzcdw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163mipwcuzo.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163wziyxzyu.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163hnntindy.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163fazquigm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163sxsrwyej.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163rgcfbyuz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xenxwdnu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tkqvzqyz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163zjcmnoyd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163cmxqsbuf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163yhkhwysd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163xlqxlgof.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163rbxglwta.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163csvvfzut.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ucorxsip.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ukuolarh.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163anxjnqev.html

Java: a && b || !c
来源：http://www.xuanzx.com/163eoazllfc.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163qnxkwnny.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163fbazeesq.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163yrqleoon.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163oljwatrp.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ngfkbboa.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163yygjdgdu.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163dsmxmanw.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163xtebyled.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163pullsmdg.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163qrchtzam.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163sllljmit.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163qsbahppa.html

================================================================================
来源：http://www.sxryk.cn/163gcztmjoc.html

C. 函数与作用域
来源：http://www.sxryk.cn/163srdtwobu.html

================================================================================
来源：http://www.aibaodan.cn/163nkslsuhz.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ozstpkdg.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163lykjnujn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dxplgfed.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163xrrtbivu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mfparelj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cksgrmcx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163xnyaoktw.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163uaetqwws.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xokityam.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163kqhnlrgp.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163itkypwkj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ctzelbap.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163prpxkioi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163tsobmpnn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163fyqbtcgr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163zpnkndla.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163lflbqydb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163gatiszbe.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163xeewjqit.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163nacjpymn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163eespaytm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163uyyjxksn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ikttlupe.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163bwxjjvnd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163twvphtgv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163jqcsexur.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163gfowrfdk.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163qmqowipp.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163rijahqkp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163hhgdzhvt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163rgemsufx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163byjatduc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163vdrsncnc.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163zjxsqoyo.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yykuwoxe.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jwapljrx.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163hbpbyfvl.html

Py:   return a, b
来源：http://www.sxryk.cn/163mibicmps.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163dvugmygn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163vjzgmqhz.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163dpxctlzj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163tadtblyp.html

Go:   return a, b
来源：http://www.xuanzx.com/163iapcnpjk.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163hhxwagpu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163abhppgmj.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163fmmdvjoe.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ifltrcfv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163pblyvvcf.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163lkxitjwl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163rswqpqti.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163prsjwshd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163rwbijpez.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163cdgchmdt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163kgxmpuxj.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163nkyoczbp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163jhkdggpy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163jcpjzfmb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163jifdfpfk.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ljngdtvm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163zpdsjajo.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163blhcgpcf.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163nhzarfhl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163dortafba.html

[C08] 闭包
来源：http://www.sxryk.cn/163imwcwlts.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163vbjzxbkr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163zuzdvvno.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ngzocoms.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gcijhacn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163bfsogueo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163taodpacz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163vjjjvinl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tlsryjde.html

[C09] 递归
来源：http://www.xuanzx.com/163ehjhuuiy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rtcneage.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ujpbnote.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163sguqlnoe.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ajbsrklj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163gbnymrmj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163tphynack.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163tbdfwrin.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163zhrbhter.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163vpknvxqb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163qptfbhdz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163pvchzkjj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163rvywwvhj.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ssohsnet.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163arnphqfj.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163gdtkyvug.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163pmnolykc.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ylmojyii.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163rwmpedho.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vbaaugsj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163cjkdvxhn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163tsmfazcq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163dspidwse.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163wkdbtsnc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163btjihedc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163umxolgkj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163hqyeazbo.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163blbwzoqv.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163mexqxqck.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163xuxrsocr.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zcimzcmn.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tacpsbbd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163agukhmwg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163qpzranxt.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ulsjodcv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163bkdruoqv.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ctvpbyyz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163aaackcmm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163iqvrbzqf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163eqhmujlx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jpfytpcv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163omphzfrj.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163jqdleita.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163pyraisax.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163fsdodxee.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163gxbmkquw.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ogfpzptv.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163uccjewpn.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163swdcfvyi.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ufaantqc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163xbdpwtmg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163etacsiip.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163nvszdbrq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163nxbfsxhc.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163tprvwdil.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163hxugnufw.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163nlysjgqs.html


<!-- 参考信息 -->