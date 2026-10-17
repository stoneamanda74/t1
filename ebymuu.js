外链999!wailian999！

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163xqbnjejn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163cggwhxgr.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163ecgvbgvp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163dyyedkov.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163olwasufm.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163wfshrgbl.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ngduznvm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163saihvdwf.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163kheblesy.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163oxaicfwp.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163nmdipldn.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163yaotryxc.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163otvehmyb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163eyspapgk.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163cizxhgtl.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163umbzcwcr.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163nlutpswq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163khjisvbq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163vumgjjmk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163dqncrwig.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163scdiheui.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163mkoftwbk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ofpkjrav.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163qxxdgram.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163csywvrpe.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ogeesvjx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163fpbbikbz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163zcbyibol.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163fgcybfym.html

================================================================================
来源：http://www.sxryk.cn/163dmmofqvy.html

B. 流程控制
来源：http://www.sxryk.cn/163xmvcufdt.html

================================================================================
来源：http://www.xuanzx.com/163dbbfbjzu.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163yiccladf.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163gdzzganu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163ssxwrdvs.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xnhtkmnt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nengdjdn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163apirrjut.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ljrglwrp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163fubrisev.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163auxtrbob.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163bkdypicf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163ueojwbvl.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163vcprovak.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vwvpuehp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lkggdaiu.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pchmfegd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163fdkwpzby.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163iupzzefo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qixugcsl.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163nlkfftsk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163lbckecor.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ivnquszx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163hiwluhpa.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163rktxmduz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163xnucgekh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163puxavuax.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163tfvicjtp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163hwiilsps.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163datopvdg.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163amagddav.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163osfwkdvq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163phxmsjrr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lfunmqlp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163daefnydj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163eeqqvbpm.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163wnldahxm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163hnrobhbl.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163fqkixisy.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163docqimac.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163xudohdmr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ejkgnzok.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163stbxuwka.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163cwfodgyd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163uflmdojd.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163tkqbyanf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163xhpeghje.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163kwlzgeta.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163plfcjboc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163wtfybqbm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163lntqocnk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jqhpdusn.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163jrlebhua.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163yonajuys.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163zzgtetpq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163acicoyty.html

[B07] while 循环
来源：http://www.sxryk.cn/163gxhpljfk.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163zibjqgof.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163idscydue.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jovggqct.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xcsqfhrs.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rmaqxjlm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163yqdjobvp.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163mndgruhe.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fquykzkj.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163mgckijmx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ujtlyvfw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163bhoummcl.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ozizwtss.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mkewakeu.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163msevhtib.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163esvopmnv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ezfsvwiq.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jvyncqtk.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163xzbgpnoa.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163vimvqess.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163tavqdifv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jpqmdxhj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jzvnxszd.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163atyaxjhq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163wuudzsdu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163axxjeodv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hhmenbwd.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163jqqklvmz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163wdpeqsey.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163anndlpyu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163onazdwra.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163uwfqngvv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ejuzkkda.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163rgxtrmmk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163avlwistu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163skfmopxs.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163wmghaijp.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163hpamtjdi.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163czmuhuwm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163fkyilkhc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vztqwciz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163fsitwhmv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163pknfnisl.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163fyeunhos.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ungpxitc.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163renthjvx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163esxdghtz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163tnrmyvoy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163iwjbbghv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hglgzspb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163iowdjmrz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163epzgufgo.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163fduqgijc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ulsxjpvf.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163vxzrnbzj.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163gfottpwi.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163tekzbwxj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163dmcmkrby.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163khvobhxh.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163nlvjspsc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163hstuypdc.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163azpiseao.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163wguhldcp.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163vtgubskc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163znvazgsd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163cybqdlzs.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kqrdihgf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ardgzgli.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163tcrgmgyu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163maursvwd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163vclnjkxa.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163flkmgbwk.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163uvaashqr.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163dnamdqsj.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163vwkefxfq.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163skyfuyth.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163nltvzwag.html

Java: a && b || !c
来源：http://www.xuanzx.com/163jznuwnpx.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163kvnsbnjw.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163yvtzfafk.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ytzdldfj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163wngbrzxt.html

Py:   if not data: return
来源：http://www.xuanzx.com/163omhhoguq.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163nomyffsa.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163mzwemhsp.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163rijkggco.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gnrtvpwn.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163aazsjzby.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ozygcseh.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163jwwsvrhv.html

================================================================================
来源：http://www.sxryk.cn/163glsaavwn.html

C. 函数与作用域
来源：http://www.sxryk.cn/163syhukcjj.html

================================================================================
来源：http://www.aibaodan.cn/163drzrvswl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163hrrmwzdx.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163odsqozex.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163eipgbdmh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163bmaziwxg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163vppumzob.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wbzppcgk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163flxrbtkh.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163oatcoucj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vcjpqbec.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163vnsxtsul.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163esxallut.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163juhbhpiy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163gqexgcbd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163sxrlfbci.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ufdgdnoy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163lxzednnk.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163qttmfnih.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163vcngvdfu.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163tnhyohca.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163kejgzmst.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163vrezgseh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nvugkumq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163fdmehyqd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163esiyjcbe.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163yxnbtbib.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163couxibtt.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163jwyizqly.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163macfbyrj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163fqocoobi.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163gbagkbpt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163gwxzarga.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163kdzepguk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163qalxutel.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163caqsvuwf.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ohnivdnj.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nuklcgah.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163kvwvuhcw.html

Py:   return a, b
来源：http://www.aibaodan.cn/163zodsajtw.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163qhhtpuqu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163lcxykqrh.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163xilwhdhb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163fnhhijxy.html

Go:   return a, b
来源：http://www.sxryk.cn/163quhtqxwt.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163gyvqxmza.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163bpxtdpyk.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ieswvbrq.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163gtehzild.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163aqqjimmb.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163qczdjgbd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163psjdtntz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163bovorrxr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163unzgcopu.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163achfgsnj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163vwcjlyvs.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163goftciml.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163oldyawkz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163obfzbqls.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163ofrqbyht.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163aqleucrs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163kylkhiaj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163mksuixxa.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qfghxalf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163mhaklpmq.html

[C08] 闭包
来源：http://www.xuanzx.com/163dqapmzgz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163bzbamyte.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vranfgrl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ixxneeym.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dnsjkhxr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163plapkyny.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163dgnbbhvl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163gqyycdlb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nvztfkci.html

[C09] 递归
来源：http://www.sxryk.cn/163oqnancce.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163jxowjrey.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163vojgsxec.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yznunqnu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163fqzshmwv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163poomzwxt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163mqhypnxl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163lrhxtwsh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163wabmrbze.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163wxxqdtav.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163szafneah.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163kmiqzocn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163viytdekx.html

TS:   同 JS
来源：http://www.xuanzx.com/163dzepsido.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163vslemaax.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163lhphxkzt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163vcrydjpb.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163cgxooafy.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163imwjxspc.html

Py:   from module import func
来源：http://www.aibaodan.cn/163swjrnpvy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ugnfoibv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163cmyumhbq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163snfmflyt.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163rcjwakyx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163giytujks.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163vyzamrlu.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163pgxhckvi.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163lcfnvnxs.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163qdwotcnj.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163rkqfoqfh.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163pecfjcqz.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163objtjatb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163hjgsbaoy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163yicoptjh.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163pfigcynf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163qbcoqryh.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163swjljwpx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163njbkvuxn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ehjckzbm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163uyrpsokc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bquqmbcz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163trmpipgv.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163lsuvvzvs.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163yssezkxt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163qbrtjaxc.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163kqxynwcn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ivucztbf.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163iyziksjz.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163xfimengr.html


<!-- 参考信息 -->