外链999!wailian999！

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163knhhbqzc.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163oruxxagu.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163xypnmxif.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163jamrvvfe.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ftzqpflt.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ohqewaup.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163kyexekam.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ylwsqfsi.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163xdowshnq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163hxielynz.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163oitroaau.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163ovhopzwm.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163gqifdiua.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163qhoyoigr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163msdwzlfv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163ahwgigxn.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163qbctpdct.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163qcrfwtqx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163xtciinvn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163nnplpwok.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163xvrzukpd.html

================================================================================
来源：http://www.sxryk.cn/163irmldnyu.html

B. 流程控制
来源：http://www.xuanzx.com/163gpjkanab.html

================================================================================
来源：http://www.aibaodan.cn/163detdvcbc.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ijspaqkt.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163khataepp.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163ngxjcfxv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yrlrrhbw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163skduvvzt.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163eqpvdeho.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163jblgsamy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163hyzybpnz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vscgubjz.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163clvyvkpy.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163jjgcrfiw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163yalxmkly.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xwziuwka.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wmgapaws.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kssfilvt.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163huwzooca.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ndjwijso.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cdxakmrm.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163budfbajr.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163mudphphv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163hddumwzm.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163usfpwfbp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163cizgjlrx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163txurmvje.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163kmvpebqh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163fancnzhz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163hnkqpyah.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163intugtsz.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163vvilblhk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163wyvhdvtm.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fgysnmhr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qqjtypnq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163tyqoyajh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163mvcegpiq.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163gisstkib.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163onxpaecu.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163mybbhpyc.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163dmflxwpv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163aiotjzpv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163mlyuwevj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163jrhsndiy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ffxbtvni.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163zbbhvzue.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ofwsvzlt.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163mbluoljr.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163udtbzyfv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ytiiumgs.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163ffugnsip.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hginqwxz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163yfssgwex.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163mnzvvhcr.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163yjuqsufy.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ygzzhfoi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163hqyjpuzw.html

[B07] while 循环
来源：http://www.aibaodan.cn/163dqozoxqj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163iczelsuh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163tqctcfzx.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163awxpsfht.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yrbinwqi.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tleqewre.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163yrynvcuk.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163matsklop.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lmaymrgo.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163xwyivxqb.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wvkcqwjq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163qbwpugwl.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uwtglfix.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163izwnkiqi.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bunjcmpk.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163axwdxbez.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163fnacdvta.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fbhtxzsu.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163exegglrc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163qherxeiw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ykixyart.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lbajqilh.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xouwoyuu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qgbmuhnv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163qcpmeyds.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163hjmzzxjc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lohztzhv.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163jjopestz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163oksgtcnk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163lxywowhv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ukyjyqcr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163hayjqlza.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163pujmpsth.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163wonwwgam.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163pmukhmoy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163dvzwtlaj.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163eekqafnh.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163itcsxbqy.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163oowopaey.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163fzezaoet.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163vrwsmiim.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ocywdxmn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163kxoytlxn.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163vnaizeuz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ulntkusm.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ilkxjggi.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163remihyta.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ymwwoqtz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tupgixvi.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nojmkkar.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vqlpytyt.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163hksmteua.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163qpedonwr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ptxalxjn.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163pcbustey.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163esdxbqls.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163lbodxpkt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dieeuhau.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ovlvbguf.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163qtxwqvtj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ngozbdec.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163jyhkbwgq.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163zkbhdjus.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163aycwctfp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163btpibhza.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163tqgmijkf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163hfeorolp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bpwgoebz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163akwzdwsv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163hjgpoiiq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163lizqjstc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163xtoiazic.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163eyrvvnse.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163tfcfjspg.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163mbqnrvre.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163vnhjrcvf.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163jndhyent.html

Java: a && b || !c
来源：http://www.sxryk.cn/163wrbomltk.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163lumfbzfz.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163xspajkct.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163zyojzyfs.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163qdkmcsmk.html

Py:   if not data: return
来源：http://www.xuanzx.com/163kzmxtlgt.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163qzycbcqx.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163cvotimjt.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163itddftcp.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163gmzergnn.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163uvphsfrc.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163yoildlxp.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163umyugbaa.html

================================================================================
来源：http://www.sxryk.cn/163zyjhblxo.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163chwyolmi.html

================================================================================
来源：http://www.xuanzx.com/163wvinwoer.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163yxvekeoi.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163wkznjeyw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163soalrlaa.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163bmktltad.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163cohkdaql.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dooizzkm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163pxodfzhc.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163bothmmvl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gbgzrsji.html

[C02] 默认参数
来源：http://www.sxryk.cn/163obzzfqlr.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163jtsheogf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163nvjqjwpx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163mzcedcga.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163vcksgzzd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163drpdbjpp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163qcznkgti.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163qyhdkuov.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163xaaddvrn.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163rpbjxgtr.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163nlkpthjn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163gzyyljtm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xxhmlepi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vyxdueoy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163zjtowvur.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163szblsfjs.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163hgnodorb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163uogoflyy.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163veityyeq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163piuykbkb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163vvsmyzbx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163losbives.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163smyhfjbw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163hmbqgacc.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ywcfrsfs.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tfxktrun.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vcuauprd.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163systbufi.html

Py:   return a, b
来源：http://www.sxryk.cn/163afnxpzxw.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163kqaxnhcm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163mbpxtlcx.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163aeqizndf.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163zvtqyssn.html

Go:   return a, b
来源：http://www.aibaodan.cn/163cwwxakca.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ldaunyak.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ishdkwji.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163qsqgztfw.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163syrwscta.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163shorqqkj.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163zapavmng.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163bayeagkr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163bgondevb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163cxahogbc.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163khhecqot.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163wwtdvxuf.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163zisvuugd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163mqucrwpu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163upjhsxzx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163jwfexixa.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163nbhyyaew.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163vvlvpjoi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163drtnbhjk.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163yywhxapv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163igqcqlts.html

[C08] 闭包
来源：http://www.xuanzx.com/163bkfbqibk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163vwyvpgfm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163tdwgdopf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dmfaiafg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dokzgktl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ptflwagt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163havcccam.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163allzzkdp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xzpqbukk.html

[C09] 递归
来源：http://www.sxryk.cn/163sywosvms.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163pxorpiee.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163eolqmgfy.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163exmbvqvj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ugswvmha.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xvglzydq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163irusngaz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163waebrszf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163punjszbq.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163fbtumofj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163biftyrev.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ydgkhnnc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163vluaysnk.html

TS:   同 JS
来源：http://www.aibaodan.cn/163nxwyxumy.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163adfnhlwz.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163mkhvaaye.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163oxilzlnr.html

C#:   块级作用域
来源：http://www.xuanzx.com/163dayxrokq.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163fmtnwhtl.html

Py:   from module import func
来源：http://www.xuanzx.com/163bntevhgr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163kkjirsxi.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163yzpsgneu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163miptulwp.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163bckgkrko.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163tbblyefs.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163lvxfcnim.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163xtodgxwy.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163kncrxwmy.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163eocgodmd.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163pizdmfbs.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jhblbvjz.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163enjyaznq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163wjetbbdo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163gsjoasrf.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163zioqliod.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ovffoefy.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ghkarjhx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163wefgzsao.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fdqaeqzo.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163upgmzjry.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163sdnpgyit.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163uocowpah.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163qtoduihm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163skzmofrv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ycprljnh.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163onadmhlb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163qkkcgpqa.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163qojofydy.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163kxcgrrzr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163hwsledhe.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163enehlkja.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ljbrzyip.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163mubtqpsd.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163fnighfcc.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163mhhsezve.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163pypvkczy.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ixtolsnp.html


<!-- 参考信息 -->