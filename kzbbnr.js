外链999!wailian999！

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163wklodeii.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163zslenvsy.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ktnezzga.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163jtshttzh.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ieetvupd.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163lvztmjyo.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163iprtnbff.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163hgipvund.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163vhroqvfb.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ebvzektf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163azxwtcne.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163ghvuafaq.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163zdsmudts.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163qhdzjcsn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163dptijzts.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163vkdugjpu.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163pcsrbezf.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163zfpjcgys.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163vxkpphbk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ghnithqk.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163aamivaww.html

================================================================================
来源：http://www.aibaodan.cn/163zvqlaulx.html

B. 流程控制
来源：http://www.xuanzx.com/163xylxqzoc.html

================================================================================
来源：http://www.xuanzx.com/163pgnxyzhh.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163cugoormo.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163rjygmovw.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163cpxtcymz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hszgpdme.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163stizufuq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163obtxdmkb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163uphlxedb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163jdmrvjbr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nwxghdti.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163twwejzgo.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163gqqohfmp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163haazohgo.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163oizqorfw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wdisgdby.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163sxxykfiu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163andcxepi.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163qakswriy.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163oblztdji.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163qlxqihvn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163fwzkdgsa.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163tqnlmepj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163mivvrpej.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jhrbbspb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163vyspyvgo.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ermroxbj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163xgrhhdem.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163hpypeamx.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163lcsttykx.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ecrxoeae.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163zhstsipq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163zuwgvzfv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163gdfjmjcf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163jrwzprjh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163edghxekh.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163jdatekmu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163jwhfsbsp.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163oevndkao.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163dfwmnqji.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163xumfqlup.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163qymgqstc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163oohdubbe.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163wctnbxop.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163cmmcfjjr.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163jizpoooz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ltofcdtk.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163xrwkczsz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163lhiewlpy.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163jpqcgstk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163sxvshrat.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fqmdoyqw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163fihiwwyq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ozeovfuu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163heyokmte.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163spbtqjux.html

[B07] while 循环
来源：http://www.sxryk.cn/163twvfizsz.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163oqynrwct.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ijmzaude.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kjjcbbeq.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kjcbugcg.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xdrppnhf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163sfjbgajd.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163feevnrgi.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pwldbwoh.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163diailgqm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163abxisbrl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163hjmjxzfe.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163klitovxt.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pvjkobws.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dvedtlfy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163jjvlvurg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163otbdiwiu.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rcajdjdh.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163shgjqzan.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ywpyqsph.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163mitxptix.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163beenrpox.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163oenirusa.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pypjiava.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163nnrfclxp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ugqqtpam.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wxxqpifv.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163rnrukxio.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163zlegqkiz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163cisszyic.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ebvhczyk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ugibbqcp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ckpjjiue.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163xmeztiof.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163beaexjyp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163hpzkqvgk.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163zeozcmjk.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bouerifi.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ppujhyjy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163tcyakzgj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163pwopxewa.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ycxywqgy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163vziptpke.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163gtvyyzcp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163kjqksmid.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163rnhuaedr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163yrynlyhq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163xsrtuqbe.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163flphabna.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wionfpku.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zvcjqarf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163hzdlkxdb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163anrmqnco.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163fvjaobcq.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163xrplsiwx.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163jrcsmzvm.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163jnlbeasu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163inxzhcey.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zsuxcifn.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163emqgvfgf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163lqjlzgnf.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163enmgsdqa.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163yqhzzmzs.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163yvzxpahc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163skvybdwa.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ngobpdhb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ennnqaez.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163tmndmsyt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163bcxfhpnc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163rtvhyusn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163oyybclee.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163njjnwygs.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163vftifumm.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163tmhhobjy.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163vilehmdw.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163quxzueco.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163mssbocpv.html

Java: a && b || !c
来源：http://www.sxryk.cn/163cojxfamx.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163gyiixmxu.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163jwjfknja.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ayclaxil.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163exjvbnuf.html

Py:   if not data: return
来源：http://www.sxryk.cn/163sotlqkwm.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163erpvbbvh.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163fbvtwwcn.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163kytymtnr.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163pbhxvwfn.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163chnxxysl.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163zrxduydj.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ywbnapvb.html

================================================================================
来源：http://www.sxryk.cn/163raekrdcm.html

C. 函数与作用域
来源：http://www.xuanzx.com/163yzianmxm.html

================================================================================
来源：http://www.sxryk.cn/163pnhmpici.html

[C01] 定义函数
来源：http://www.xuanzx.com/163qjukadjk.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163vnwqkkxv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ftlxjxzx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163vnuyelrp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163afbhcbwn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xyhjsagc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163lucfdpbg.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163opuoxavh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xubuyxzj.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ptxcafcf.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163tpaqczko.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163tniwieoq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163jmzaiclo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163wcnuttvu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ligkhcqo.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163iclofrlz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163lmxityvp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163kmcalcsz.html

[C03] 可变参数
来源：http://www.xuanzx.com/163dxjvsugw.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163lndlnmor.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ubfkzfse.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163kgltncry.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163renoodcl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163avcldqup.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163icdjttoe.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163qnmthnci.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163dmwgcwop.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163agifkuva.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163bzxylmyv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ursleyhb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163decqxiqo.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163gooxtzzy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163cdvhfqfj.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163yoaykhgp.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163svrncoas.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163edsqwfns.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163hicgwjxl.html

Py:   return a, b
来源：http://www.sxryk.cn/163txorwqjn.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163rgbqwwpu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163vxydwysc.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163nucgcjpu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163avwflnar.html

Go:   return a, b
来源：http://www.aibaodan.cn/163kvtlbxvm.html

Ruby: return a, b
来源：http://www.xuanzx.com/163tnctjfej.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163xmknqwof.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163fxtkiwwr.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ohgtbuts.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163cyhbktby.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163kysoeduy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163zcdkunrh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163xfankcvy.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163zzxnvrxw.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163roxrbodh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163bzyonncq.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163shkgvtew.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163pueudlwa.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163wivwpbkm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qtwwwkki.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163cmbifhnm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163fmumvmzz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163lvvyylxk.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163kksiovep.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163mnonwaxt.html

[C08] 闭包
来源：http://www.xuanzx.com/163vdcayayi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163nsashocn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163nizqkaai.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gewqxiyt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163fhisgcum.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163hlcdenrc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163rrezpmck.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163hphgiers.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tapapije.html

[C09] 递归
来源：http://www.sxryk.cn/163efbhbxxn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163fgcsmphn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163oucnrwhf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163idluunge.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ctgfittg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163khdtfpby.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163gofdhrbg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163bqvwmwbo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163gjwkkfrb.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163rnqfxayz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163gxalfpnr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163nkdhyygv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163inwrhoog.html

TS:   同 JS
来源：http://www.xuanzx.com/163qovyloqz.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163yrhzrivn.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ildfzxfz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163qejzsivn.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163lrvnxatn.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163lnezrcug.html

Py:   from module import func
来源：http://www.sxryk.cn/163krnbrmpm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163euwtxgaj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163wwssroxz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163dmxtgiro.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ibonctyz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ugrarlwl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163qhnusomi.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163qqxoducg.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163pputolga.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163oahrmsqn.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163fmtblmid.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zkbhnuvu.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163akysazik.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163mmqlsecj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163tzwrqspj.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163prkasvft.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163jxyrqrpb.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163svxssxbg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163vlbjarlj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bptjomjo.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163qgtbucxp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ajfaqkxb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163aqcuvkqk.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163weyhvuez.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163eiumdkzp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163sfwojyki.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163csgdcvin.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163npjvwntj.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ryizovfy.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ffrsaput.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163dteuiipl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jpjuifur.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163sornxpct.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ekrhmkzv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163zxnlmnbs.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163cyusmjbj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163dviryvmq.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163uivvhemb.html


<!-- 参考信息 -->