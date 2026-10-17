外链999!wailian999！

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163xpxefyzt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163anwvfgnh.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163svqsnxxu.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163adavqvno.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163hsjckxog.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163hohrdwic.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163huoqckdz.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163cbixyxnq.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163kpudgvxm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163zzmadvso.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163xsdpqfov.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163zimjuzyx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163kkeutyll.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163trranmvp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163jibncwxy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163jwlrydlk.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163rywntbsy.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163gxmtdkul.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163bkumvffw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163fetxysvt.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163pgppnfzy.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163atsnkflm.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163mddzbhor.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163fkwzdbbm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ggorlqyh.html

================================================================================
来源：http://www.aibaodan.cn/163qqgrbxba.html

B. 流程控制
来源：http://www.aibaodan.cn/163dnjatytp.html

================================================================================
来源：http://www.aibaodan.cn/163rczkxfby.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163tmpbgyff.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163qrrexcng.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163eweddifm.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dggceaog.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wclhbbxi.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hhpagqxu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163zqrydkzy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163putnreuk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uudpscdt.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163brufmhyt.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163upnlsemr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163cofjmabz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163afhwngra.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dagnhpnz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ggtgppsc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ignvycjx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163uxxtrnom.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yhyzgkxy.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163pgbvporn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163hydssoqc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163vjejfdft.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163mpnsiflx.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163iihnzifw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163gxtuyazx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163beayprjz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163zquqeeio.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163zwogvdus.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163liqytnwh.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163khngfxeg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163iyjxkpzd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163buhjxluc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163yxcsrkji.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163drpyjxoh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163kgeeaqtw.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163bhveccpa.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ocehvrwg.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163itiyqoep.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163pckvvchc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163brjbozfl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rrbuuawr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rbyhptuv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163bqbfhzsm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163tcvekjbq.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163wsnnpxbo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163wavaenqf.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163aztkrgjx.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163fbmnmgsd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163jorczsyf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bvyxkwat.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163tfxxurcu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163arcniqus.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163fbgecvzm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163pymtiats.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163nasbkyvv.html

[B07] while 循环
来源：http://www.sxryk.cn/163doorlufb.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163qntzohml.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163jmnromhq.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163prcgdxka.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hajnqxqx.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ythfkvvl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163mdgycjzm.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163teuhcldr.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nmuazwon.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163pkyeskoe.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ziepinvm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163onfqrhbm.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wjxjymjl.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xuldhfqz.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zbxjszkj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ogwjgtju.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163mgqlmuah.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163baookkrb.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163rnfgukzn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163naxjdwre.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163nwjxtjpp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nawvtgdf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163axworrjs.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pfmfronn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163kpvpohyh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ubegquyj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163scteqylu.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163adfxests.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163kdhmrqaf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ksjlwaia.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163joiohlpk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163oaapdyhc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163wuwrhcoy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163xminaiyt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163cllzzbjv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163uhgszufu.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163tcrbqcpg.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163kfhoszlg.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163bkvomatz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mdcmddar.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jzkrazgx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163iwngvilb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163oikfxark.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163wovjhngw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163nqdcnkaq.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163vqwxnpgi.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163tlbrsicr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163xcmxperp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163waeijrhw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jvfeuvvz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kkfnzbqf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163prielmpd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163zqjqnpho.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163amlgqcqr.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163trydemaz.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163mxbotjpx.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163bpsfgait.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nzfdpotl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wngzoavr.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163vjethvsh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163jurvwcvs.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163logrkonx.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163fovuntyk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163lfkkfrjx.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163gjgmphnm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163kgledtft.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163nktvstyx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163vyacdlxt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163nkvgvvdm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163wcojcwit.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163aujrgoxs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163kjkthxfm.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163orsycsyq.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163zytlhrgp.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163uqfokgxy.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163hunobspb.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163chcprbvn.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ipkcqylw.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163utkhdqnv.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ixjepndy.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ceiqxnma.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163jjyzqnwt.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163qnfifqhl.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163gthqewbn.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163kzutyugt.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163lrfcpzej.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163jsfmrvjq.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163tmdnvkde.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163sgkluqpf.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163veyykoyx.html

================================================================================
来源：http://www.aibaodan.cn/163ntmsjjdw.html

C. 函数与作用域
来源：http://www.sxryk.cn/163laxcobin.html

================================================================================
来源：http://www.xuanzx.com/163sevucron.html

[C01] 定义函数
来源：http://www.xuanzx.com/163mubrpupd.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163rjeqqqmo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163abtqycxw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ynvykzbl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gkavmtnr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xqoqdduk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163rfbfgxpi.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163hzhvqkrf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hcvcaxbf.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163tyqtwner.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163qfjhdsib.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163lgnkzxjj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163pannvybx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ykubqywp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163xprmwrhl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163fjkjzsey.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163rjnxjvvx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163swsvexkb.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ywunnnmj.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163llkunbjw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ktqwbrbv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163kmkpeelr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163orfszusu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163bhvptmoq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163jxmqireq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ogflhzdh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163qdevkfdg.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163bxwekqlx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163gacdocao.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163cudgnozu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163yiaktafd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163sgddueec.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mpjdlsdl.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qibsetam.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163eegqkxls.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qjpwykpn.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163rycjsitk.html

Py:   return a, b
来源：http://www.aibaodan.cn/163zybfjvri.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163zpjjvalc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163slctyemt.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163wkvoxtbk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163wlpacssi.html

Go:   return a, b
来源：http://www.aibaodan.cn/163rqehcleo.html

Ruby: return a, b
来源：http://www.sxryk.cn/163fvgqvqfs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163bnjcwfus.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163xyoeichp.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163cjtcgffs.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163xnwrrvrm.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163oshjtvke.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163cfwhajyb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163qayhphca.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163tvnntlul.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163tzmveqhv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163lakspxft.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ojamgnqc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163iglxkvty.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163pfaazmbv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163fsmnanbv.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ydotocfw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ywfkqipl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163tbrhtujt.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163wugrjqki.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163dsxappgd.html

[C08] 闭包
来源：http://www.aibaodan.cn/163qcfzucss.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163nlbihjtt.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163jztegjqr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pxzbwfce.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163matiivjg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163tfoemgpo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163cfctabvf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163dfwsbejq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163prhvaubi.html

[C09] 递归
来源：http://www.aibaodan.cn/163qoaomzpl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163nqgiyjsn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163bvvrmvlu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ssjgqgji.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ykvdwxkz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163jpdsfxzf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163dvcqvizl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163eihixjhj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163eninzden.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163dntaorng.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163igrdkqid.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163yubcnejr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ynwzknmm.html

TS:   同 JS
来源：http://www.sxryk.cn/163eviqpkea.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163kguivmfr.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163pzmilypb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163wjccvudu.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ulopzasz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ugsvvple.html

Py:   from module import func
来源：http://www.xuanzx.com/163yhtoxvxf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163libwlhcp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163gweihqbs.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ualvykpk.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163bxidgmpe.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163mqdigrlh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163rpfcrako.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ibwzfqqs.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163einlhopj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163nunbsvwv.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163wntbmkwg.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zbkafftv.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163utvkjuqf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163kyqegewk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163iaufyvlh.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163zefaxtdj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163dimqcvzl.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163dhakahcw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163rgovfjqg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163laeznmzg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ioxjqvbi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163kgmfdkjl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gkyljokd.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163cczbqche.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163vlrxmpnq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ewypobjb.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163vxgingtq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163dkjnbjaz.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163nyuniyiv.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163wgqldaat.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163qggmndiq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ltxfcgqu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163orzuycmx.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ifxlijnq.html


<!-- 参考信息 -->