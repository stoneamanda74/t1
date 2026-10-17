外链999!wailian999！

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163hmibyref.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163cqzypklm.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163cltoqfnu.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163shxcoops.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163ewsikkhg.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163swkgedvi.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163zwitkest.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163nmlqaedh.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163dyahszyo.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163gqhhgllc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163gheimyhr.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163tgywpccb.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163euieboui.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163ttvzketg.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163hzokkfkb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ptydlwmz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163axnbflmu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163okpwfuol.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163ssrhzlbn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ygcdngid.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163hmruydva.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163hdncpvni.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163apqvbzuj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163tnroxbse.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163gcdxpbsq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163oucnjcmu.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163iyeumwrz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163kvlrzetv.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163zifghsbv.html

================================================================================
来源：http://www.aibaodan.cn/163splqgrtc.html

B. 流程控制
来源：http://www.xuanzx.com/163pdkxyehu.html

================================================================================
来源：http://www.xuanzx.com/163miqrslbt.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163dmlmgeaa.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163luyievro.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163mpscxdcx.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ubiiokxb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xrdtbpfk.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qsniqaev.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163zjnmzzgx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163tlrqzkgo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zvwtdxnn.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163fzagjguu.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163kszhussz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163ajvlzeku.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163saampdbm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xsjhkjqd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hsnsiqaf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163xpgvahrc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163hsiwykar.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163khsnhgdt.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163egiwpbhl.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163ndfqcvte.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163opakemsd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xpvsdjjk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ugzziztw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163nqdtfbtl.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163wflcygfr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163urzntqcc.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163wofcsgfk.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163mvytqhzf.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163pmrkdpzp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163xspsudog.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163awgtfnva.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163jgrkurak.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163yzurxcso.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163aqqthwdf.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163etmutdjx.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163xdtxfjbq.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163zjacsire.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163slgivmgc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163plbcizem.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rjdhulby.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163fenwtqbb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163mwoxfdbg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163mvqewbgt.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163zutksfcv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163sagtcadz.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163iohpbadm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ycixcubk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163bwtlnrne.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163tlspbmbs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ylrefbmd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163axbbnbyo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163besuthre.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163eqcmbfpq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163fcjujacd.html

[B07] while 循环
来源：http://www.xuanzx.com/163pzdjacxz.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163bpnokszt.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163oudngwfm.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ldnupota.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fmhliqaz.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kfkuclux.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163dxqsocqp.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163wejmnepy.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rdaibpru.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163icxhvaam.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163pjvgdcge.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163oiryzzxl.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lqdqbrdg.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qtacnssn.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ekkuuhns.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163lysxdrdj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163paloffqe.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kdlsqnqu.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163eameyseo.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163kyrivhdi.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163cspguvic.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pqtkmvve.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tbgwacpw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163eldgwxpt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163djqgkvnc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163uenapxvl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kvbhgeoz.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163zunbrjoj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163unyedmdm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163yzureklr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163yreggjbb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163cfrbzkpz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wzsbxhky.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163iltcwcdm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163yuhudtaa.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163tqgktqvg.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163syjlijjc.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163crbrbsbj.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163hoprltdi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163sizzzkjz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xjdznxir.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163kzgcbzes.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ttodawtd.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ejrwseob.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163rmpucavl.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ptowmoxx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163qrakqffh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ifwyrbaf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qtallwna.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zjtgidka.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ajapjpfu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163sbenhnzs.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163kbduqcbk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163batyuwsf.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163awvqqwhv.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163vlbozebe.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163tvykmkjm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163tfkunbng.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163qpytazfd.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163yifntdvf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163tmyqfkyg.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163efhbdqec.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163jgwmnrih.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163vhlshrdy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163diwgcnvf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163fldupvfd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163edonwbye.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163bxjthjez.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163sizbhfiw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163cabzabqn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163hrlucxam.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163tsexxbpz.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163gmqukrqi.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xvqimtyn.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ighxiorz.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163iisrwyzy.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163iugjcyrn.html

Java: a && b || !c
来源：http://www.xuanzx.com/163lxogohbg.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163djkyuknd.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163mctywbgv.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163nmpyynrp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163tjqlpxcs.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ugckkjgt.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163cgrojywp.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163tweenbil.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163fpaqizgm.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163xhwwtjey.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163fvjuybpj.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163bfluowga.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163zbgjvcjf.html

================================================================================
来源：http://www.xuanzx.com/163zgrwrevk.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163grusjzjt.html

================================================================================
来源：http://www.sxryk.cn/163joqtkyjj.html

[C01] 定义函数
来源：http://www.xuanzx.com/163opuxocmt.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163gfneqgtn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hhhotfgk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163dyzrtyyd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qwaddlzm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163niitdchp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163wqyxxdgx.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163gumakzpl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pjvmpyyg.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ekscvshc.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hbsiwvni.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163vqkdpdar.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163jnfwanin.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ghhutnax.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163wudcvafh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163okkdkczb.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163thrfyohh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163cggpccdm.html

[C03] 可变参数
来源：http://www.xuanzx.com/163xnnrqjpj.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163iaerhycx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163lxqqhfbn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163teyvachv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zkpknuuo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163yjtcouxf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ugomttvi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163momtpfxs.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163yhmfhkod.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163bmbtbxqz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163whgitaum.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ikcwjpzs.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ogaapoft.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163loyhsudp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163czhjedlu.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163nbfsdlcp.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mambicuz.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vjbtipco.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163lvzgfzbp.html

Py:   return a, b
来源：http://www.xuanzx.com/163apuxgphg.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163avldlmvc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163mlpqjdmi.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163rjqgzuee.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163lsizyhlj.html

Go:   return a, b
来源：http://www.xuanzx.com/163lnarqnge.html

Ruby: return a, b
来源：http://www.xuanzx.com/163qsnriprv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163qcdgyyrc.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163zljkdave.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163wljqggvr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163jvefysfk.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163blykivwf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163tvsyqcya.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ixartnpx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163oczdwxwl.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163mebodtdw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163mdtjankz.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163bkttiyxa.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wdbivnbn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163vzyvcuoz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163fcaqufcq.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163sjfdtzdx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163qwnhjkhw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163vieuilia.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ggxdbzmy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163jcdmilby.html

[C08] 闭包
来源：http://www.aibaodan.cn/163udqxxdak.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163lauuwukv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163dmamdwmz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hnztknjn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lnkrvsso.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163uciwfwwx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163dqwrxkcx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163kyqfomqi.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163puzobjuf.html

[C09] 递归
来源：http://www.aibaodan.cn/163bleekytd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163mitymhpl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163clgwlbib.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163czqyqxud.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163hgcxhwzv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163xxesrzif.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163sdgsdbdq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163higiinhs.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163uwmnotif.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163mesauhju.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163hokcknkj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163fubjhvku.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163tnojxzii.html

TS:   同 JS
来源：http://www.sxryk.cn/163lqikvboc.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163zjloawnd.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163amzlqzdl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163rkinppjr.html

C#:   块级作用域
来源：http://www.xuanzx.com/163tnfalzch.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163eawklspy.html

Py:   from module import func
来源：http://www.sxryk.cn/163qhamhrfe.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163kchtykef.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163dudfnuxk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163chzwhwcf.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163cajmhwkb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163pxacotme.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163zezozzbq.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163gjpqcapp.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163udbbyfor.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163xeubtzyf.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163mcpeiepv.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dlsyzstw.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gurueutw.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ehonfpin.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163demstich.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163mgerbtaz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163tyikkutg.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163jnxkozgs.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163wygtxyzx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zgjycymo.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163eawuxzay.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163iitfzjrf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163swqcfmrm.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163xbrumqlo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163nfuxdzyw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163xtjidqea.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ozbplqqk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163gppahtdg.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163nxbxhrov.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163voqjxvzv.html


<!-- 参考信息 -->