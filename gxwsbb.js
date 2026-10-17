外链999!wailian999！

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163cdzjytmt.html

Py:   len(s)
来源：http://www.aibaodan.cn/163fgjmzgzy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163uxttcpfy.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163axskauej.html

TS:   s.length
来源：http://www.xuanzx.com/163slhjdamy.html

Java: s.length()
来源：http://www.sxryk.cn/163itfojhaa.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163wahaeggx.html

Ruby: s.length
来源：http://www.xuanzx.com/163iubrupwe.html

C#:   s.Length
来源：http://www.xuanzx.com/163zhkwexax.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163eokohjvr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163kxeuryag.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163rnvmqdrb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zgqelypl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ppsmybpu.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tkzmqvuf.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163uzhnifrh.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163mcveayqm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ltulcnxg.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163xdwnikhi.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163cpirupxx.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163yxlbyeez.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zvxbcrtz.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163azmzupaa.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163btqijrwz.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163yewqzygh.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163bjgnpvlx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163olsetavw.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163bqtowexh.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163klvftseg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163pdtxpwti.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163lddtltyu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163mgmkeewf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163luiymdio.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163siihdryy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ijackjuf.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ckmmqbfb.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163lfmfamlw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163hpxwlgty.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163dxbimwqj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163islpwkxc.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163shiwfzjm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163xysxwgxh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163wjokqixd.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163kfjeymck.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163mvzdggdm.html

================================================================================
来源：http://www.xuanzx.com/163rjvldwin.html

B. 流程控制
来源：http://www.xuanzx.com/163slxnieet.html

================================================================================
来源：http://www.xuanzx.com/163ernqfxle.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163efhhznlv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163rhlwhlgh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163fhzptwaw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163borotcrc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rmwjefjd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ingzljzp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163jjrjginy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163hkwgouun.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qrmmlanf.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163wehsptct.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163bbfzzqnz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ogvdffrv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xemofzta.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dywrimcm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zdkcbrzm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163wgteyphm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163mninxmpf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163icaerfyt.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163plfareyk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163onvgqvaz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163viuuqzvd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vjqdgkbw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163yogyntse.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163xyvrxusd.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163dupnlbtc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163kqeahbou.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163wuwyqnws.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163durwofxa.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163nlbqdizs.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163rgkxhkdw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163vmmaadzx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pkuyweue.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163qqtagwjq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163szxavxzt.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163qdoiqhcy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ugisjpso.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163uwsdhvwq.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163szviczlr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163bcxgkott.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ygrwxwof.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163vjvxrqde.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163rkabduum.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163fiijwqlh.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163zyrzmbge.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163rrbabhmk.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163kzkqgvnr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163zhwelgmx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163bzkthsjn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qhejhiht.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163txgqfbpj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163qsltktxz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163yduelkuq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163hbbdjhio.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163vhstlzit.html

[B07] while 循环
来源：http://www.sxryk.cn/163aptocldb.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163bnryxgyc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ypupxylj.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kparmqef.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zohvdeah.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163uycwvcsd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163vebdawkd.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163qhstlcxl.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ypdlgfme.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163opygtdxi.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ggecggna.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163dhatpdaj.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163akjdkuco.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tbxcrahr.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wbifmvqt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163aeglzgua.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ycpiagas.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nimiijre.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163fontqyun.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163pyhdskgz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163cxtifqpl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kwsnrjxa.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163sksaofji.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163udjyhbsz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163xzsrvwbr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163pzaxzzab.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hfzqgeib.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163vreqgvqw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163spieqqgn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163altucjya.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163poaezrcb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163jxlrcphr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163skfpavbm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163gaksdurr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163qjgtjvef.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163kirpgtih.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163olmcgwua.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163kgsfhyqz.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163nzukqdtk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lzpalrhl.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wdwicorm.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163fskpzciq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163gkjjatlt.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163plvkwyrd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163hczwgqsd.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163pcjyccrd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163zevrqplz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163kaxnlvpu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lyywtokj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pagrkasz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ycvkqlto.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ptuhgjgw.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ocizibjt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163tdojdaka.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163eysmtcoo.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163eazmidnx.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163bocannro.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zehyoust.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163sklkldlh.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163tmscinmn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163snovvbop.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163lcixgvym.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163iemxnvbz.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163xapjiywr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163idrticdo.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163dhgzcavw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dfmjikok.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163qdugpzad.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163uhqlvdmv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163khvhzjwq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163phswvilk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163iicsrqhj.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ejjtqeya.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163vrbphcel.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163oqxjxmgo.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163cmzjprkr.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163bvgvgrdp.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ozoiogsa.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163eighcybb.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163qhvtrcpe.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163mfvdelto.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163seyohaqx.html

Py:   if not data: return
来源：http://www.xuanzx.com/163hspmxjsv.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163kpqporai.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163sdyfiioq.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163onifljxs.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163zbqvbnxh.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163fxygtuvf.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163kpnrvtgy.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ttjcdkus.html

================================================================================
来源：http://www.sxryk.cn/163daiwnvjj.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ytotysgd.html

================================================================================
来源：http://www.sxryk.cn/163ehtttvup.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163gawnysyw.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163xsgrubre.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wuofxjhb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163fmsiskvc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bixbtqrh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gvnrmngs.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163jaacbzdn.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163pxvnsvxe.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tpfolgsp.html

[C02] 默认参数
来源：http://www.sxryk.cn/163jhmjiqvv.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163eksuxsxb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163avbiqryx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163wkmsrzih.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163nwpxraur.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163bwbcacwb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163utmwllko.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163vmiovxhs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163kqctvfhe.html

[C03] 可变参数
来源：http://www.sxryk.cn/163nxzpkxmz.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163sbcyczch.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163relewcdj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nbvkbxed.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163rtwyaolj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163prwaptjl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163fsikyiql.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ucwwxjdw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163tqimsyjy.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163wnootjio.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163stakixtt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163elprhckj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163oyfkactb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163mqmxsgdk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163dechgaoz.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163qqunoxwe.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163dioplpxh.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xwxeyavv.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163oqxjfbhd.html

Py:   return a, b
来源：http://www.sxryk.cn/163iibklwrh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163pcgqppkm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163mkqqvhjy.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163mwyksivo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163hakeoyto.html

Go:   return a, b
来源：http://www.xuanzx.com/163kyukkuar.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163mlorpzmg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163cjyfikjz.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163rknnifro.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163rqgjhxzz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163rxlkgbxv.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163hlhrnvfp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163rzzcvfig.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163bbqmhpfn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ohdmimgi.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ruiaxauf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163amdzjyoo.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163wziolrvt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163rqwdmaae.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163fdcccnnj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163jfkayzsc.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163rdsdaxfd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163uladdprx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163tjhirucu.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163hpeefuvp.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163shbmsbxm.html

[C08] 闭包
来源：http://www.sxryk.cn/163nqutxvmu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qnrfzwyo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163baeweuuq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zmsqgsjk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xxxnuzwo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163wboitlqk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163appbcugn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163idtwsyth.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bthumgja.html

[C09] 递归
来源：http://www.xuanzx.com/163doaniawv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163egglipfb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163yjpchprz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rdjzvsvu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163aruxcnlr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163dzhrzmta.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163tzxaxczi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163eqrmwtja.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163kdsoqoyg.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ynyodgbu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163krgtgugg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163qgduvxon.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163kzlayfvp.html

TS:   同 JS
来源：http://www.aibaodan.cn/163wxmruylj.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163veesovhx.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163xoilwttt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163izaotjuy.html

C#:   块级作用域
来源：http://www.sxryk.cn/163znwmxboz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163hczfzvit.html

Py:   from module import func
来源：http://www.aibaodan.cn/163echoqgyl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163mnitsdmk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163wgwpssyt.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163demszjoj.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163zyydmfuj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163edkbvtim.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ctdwhrsi.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163acoknpyt.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163swwnrvel.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163fcilteev.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163wrcsinpi.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163yddlpddh.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wxerzmxz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163bepnjxou.html


<!-- 参考信息 -->